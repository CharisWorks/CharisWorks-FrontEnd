import { initializeApp, FirebaseError } from 'firebase/app'
import axios from 'axios'
import {
  Auth,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateEmail,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  User,
  getIdTokenResult,
  IdTokenResult,
} from 'firebase/auth'

const ADDRESS: string | undefined = process.env.NEXT_PUBLIC_SERVER_ADDRESS
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSEGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const SignInWithEmailAndPassword = async (
  auth: Auth,
  email: string,
  password: string,
): Promise<IdTokenResult | null> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    )
    return getIdTokenResult(userCredential.user)
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.log(error)
    } else {
      console.log('internal error:', error)
    }
    return null
  }
}

const SignInWithEmal = async (
  auth: Auth,
  email: string,
  password: string,
): Promise<IdTokenResult | null> => {
  const URL = ADDRESS + '/signin'
  const response = await axios.post(URL, { email: email })
  if (response.status == 200) {
    return SignInWithEmailAndPassword(auth, email, password)
  } else {
    return null
  }
}

const SignUpWithEmail = async (
  auth: Auth,
  email: string,
  password: string,
): Promise<IdTokenResult | null> => {
  const URL = ADDRESS + '/signup'
  const response = await axios.post(URL, { email: email, password: password })
  if (response.status == 200) {
    return SignInWithEmailAndPassword(auth, email, password)
  } else {
    return null
  }
}

const SignOut = async (auth: Auth): Promise<void> => {
  try {
    await signOut(auth)
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.log(error)
    } else {
      console.log('internal error:', error)
    }
  }
}

const SendPasswordResetEmail = async (
  auth: Auth,
  email: string,
): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email)
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.log(error)
    } else {
      console.log('internal error:', error)
    }
  }
}

const SendEmailVerification = async (auth: Auth): Promise<void> => {
  try {
    const user = auth.currentUser
    if (user) {
      await sendEmailVerification(auth.currentUser)
    }
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.log(error)
    } else {
      console.log('internal error:', error)
    }
  }
}

const UpdateEmail = async (auth: Auth, newEmail: string): Promise<void> => {
  try {
    const user = auth.currentUser
    if (user) {
      await updateEmail(user, newEmail)
    }
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.log(error)
    } else {
      console.log('internal error:', error)
    }
  }
}

const SigninWithRedirect = async (
  auth: Auth,
): Promise<IdTokenResult | null> => {
  const provider = new GoogleAuthProvider()
  try {
    await signInWithRedirect(auth, provider)
    const user = auth.currentUser
    if (user != null) {
      return getIdTokenResult(user)
    }
    return null
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.log(error)
    } else {
      console.log('internal error:', error)
    }
    return null
  }
}

const SignInWithPopup = async (auth: Auth): Promise<IdTokenResult | null> => {
  const provider = new GoogleAuthProvider()
  try {
    await signInWithPopup(auth, provider)
    const user = auth.currentUser
    if (user != null) {
      return getIdTokenResult(user)
    }
    return null
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.log(error)
    } else {
      console.log('internal error:', error)
    }
    return null
  }
}

export {
  auth,
  SignInWithEmal,
  SignUpWithEmail,
  SignOut,
  SendPasswordResetEmail,
  SendEmailVerification,
  UpdateEmail,
  SigninWithRedirect,
  SignInWithPopup,
}
