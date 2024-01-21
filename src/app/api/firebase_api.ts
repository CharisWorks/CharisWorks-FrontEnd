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

interface idToken {
  idToken: string | null
  message: string
}
interface message {
  message: string
}

const GetIdToken = async (user: User): Promise<string> => {
  const idToken = await user.getIdToken()
  return idToken
}

const SignIn = async (
  auth: Auth,
  email: string,
  password: string,
): Promise<idToken> => {
  if (URL != undefined) {
    const URL = ADDRESS + '/signin'
    const response = await axios.post(URL, { email: email })
    switch (response.status) {
      case 200:
        return SignInWithEmailAndPassword(auth, email, password)

      case 400:
        return { idToken: null, message: 'this addres does not exist' }
    }
  }
  return { idToken: null, message: 'server address is not defined' }
}

const SignUp = async (
  auth: Auth,
  email: string,
  password: string,
): Promise<idToken> => {
  if (URL != undefined) {
    const URL = ADDRESS + '/signup'
    const response = await axios.post(URL, { email: email, password: password })
    switch (response.status) {
      case 200:
        return SignInWithEmailAndPassword(auth, email, password)

      case 400:
        return { idToken: null, message: 'this address is already exist' }
    }
  }
  return { idToken: null, message: 'server address is not defined' }
}

const SignInWithEmailAndPassword = async (
  auth: Auth,
  email: string,
  password: string,
): Promise<idToken> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    )
    const idToken = await GetIdToken(userCredential.user)

    return { idToken: idToken, message: 'OK' }
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      return { idToken: null, message: 'firebase error:' + error.message }
    } else {
      return { idToken: null, message: 'internal error' }
    }
  }
}

const SignOut = async (auth: Auth): Promise<message> => {
  try {
    await signOut(auth)
    return { message: 'successfully sign outed' }
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      return { message: 'firebase error: ' + error.message }
    } else {
      return { message: 'internal error' }
    }
  }
}

const SendPasswordResetEmail = async (auth: Auth, email: string) => {
  try {
    await sendPasswordResetEmail(auth, email)
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      return { message: 'firebase error: ' + error.message }
    } else {
      return { message: 'internal error' }
    }
  }
}

const SendEmailVerification = async (auth: Auth) => {
  try {
    if (!auth.currentUser) return
    await sendEmailVerification(auth.currentUser)
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      return { message: 'firebase error: ' + error.message }
    } else {
      return { message: 'internal error' }
    }
  }
}

const UpdateEmail = async (auth: Auth, newEmail: string) => {
  try {
    if (!auth.currentUser) return
    await updateEmail(auth.currentUser, newEmail)
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      return { message: 'firebase error: ' + error.message }
    } else {
      return { message: 'internal error' }
    }
  }
}

const SigninWithRedirect = async (auth: Auth): Promise<idToken> => {
  const provider = new GoogleAuthProvider()
  try {
    await signInWithRedirect(auth, provider)
    const user = auth.currentUser
    if (user != null) {
      const idToken = await GetIdToken(user)
      return { idToken: idToken, message: 'OK' }
    }
    return { idToken: null, message: 'user is null' }
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      return { idToken: null, message: 'firebase error:' + error.message }
    } else {
      return { idToken: null, message: 'internal error' }
    }
  }
}

const SignInWithPopup = async (auth: Auth): Promise<idToken> => {
  try {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    const idToken = await GetIdToken(result.user)

    return { idToken: idToken, message: 'OK' }
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      return { idToken: null, message: 'firebase error:' + error.message }
    } else {
      return { idToken: null, message: 'internal error' }
    }
  }
}

export {
  auth,
  SignIn,
  SignUp,
  SignOut,
  SendPasswordResetEmail,
  SendEmailVerification,
  UpdateEmail,
  SigninWithRedirect,
  SignInWithPopup,
}
