import { initializeApp } from 'firebase/app'
import axios from 'axios'
import {
  Auth,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateEmail,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
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

interface idTokenFromServer {
  idToken: string | null
  message: string
}

const SignIn = async (
  auth: Auth,
  email: string,
  password: string,
): Promise<idTokenFromServer> => {
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
): Promise<idTokenFromServer> => {
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
): Promise<idTokenFromServer> => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  const user = userCredential.user
  const idToken = await user.getIdToken()
  return { idToken: idToken, message: 'OK' }
}

const SignOut = async (auth: Auth) => {
  await signOut(auth)
}

const DeleteUser = async (auth: Auth) => {
  const user = auth.currentUser

  if (!user) return
  const idToken = await user.getIdToken()
  await deleteUser(auth.currentUser)

  return idToken
}

const SendPasswordResetEmail = async (auth: Auth, email: string) => {
  await sendPasswordResetEmail(auth, email)
}

const SendEmailVerification = async (auth: Auth) => {
  if (!auth.currentUser) return
  await sendEmailVerification(auth.currentUser)
}

const UpdateEmail = async (auth: Auth, newEmail: string) => {
  if (!auth.currentUser) return
  await updateEmail(auth.currentUser, newEmail)
}

const SigninWithRedirect = async (auth: Auth) => {
  const provider = new GoogleAuthProvider()
  await signInWithRedirect(auth, provider)

  const user = auth.currentUser
  if (!user) return
  const idToken = await user.getIdToken()

  return idToken
}

const SignInWithPopup = async (auth: Auth) => {
  const provider = new GoogleAuthProvider()
  const user = await signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result)

    if (!credential) return
    const user = result.user

    return user
  })

  if (!user) return
  const idToken = await user.getIdToken()

  return idToken
}

export {
  auth,
  SignIn,
  SignUp,
  SignOut,
  DeleteUser,
  SendPasswordResetEmail,
  SendEmailVerification,
  UpdateEmail,
  SigninWithRedirect,
  SignInWithPopup,
}
