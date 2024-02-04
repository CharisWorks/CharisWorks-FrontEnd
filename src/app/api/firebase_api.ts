import { initializeApp } from 'firebase/app'
import axios from 'axios'
import {
  Auth,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  getIdToken,
  UserCredential,
} from 'firebase/auth'

const BACKEND_ADDRESS: string | undefined =
  process.env.NEXT_PUBLIC_SERVER_ADDRESS

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
const auth = process.env.NEXT_PUBLIC_API_KEY ? getAuth(app) : undefined

type UserAuthStatus = {
  isExist: boolean
}

interface UserFuncInterface {
  IsExist(url: string, email: string): Promise<boolean>
  SignUp(auth: Auth, email: string, password: string): Promise<UserCredential>
  SignIn(auth: Auth, email: string, password: string): Promise<UserCredential>
}

class UserFuncs implements UserFuncInterface {

  async IsExist(url: string, email: string): Promise<boolean> {
    const response = await axios.post(url, { email: email })
    const data: UserAuthStatus = response.data.json()
    return data.isExist
  }

  async SignUp(auth: Auth, email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  async SignIn(auth: Auth, email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password)
  }
}
const defaultFuncs = new (UserFuncs)
const SignUpWithEmail = async (
  auth: Auth,
  email: string,
  password: string,
  UserFuncs: UserFuncs = defaultFuncs
): Promise<UserCredential | null> => {
  const url: string = BACKEND_ADDRESS + '/userauthstatus'
  const existance = await UserFuncs.IsExist(url, email)
  if (!existance) {
    return UserFuncs.SignUp(auth, email, password)
  }
  return null
}

const SignInWithEmail = async (
  auth: Auth,
  email: string,
  password: string,
  UserFuncs: UserFuncs = defaultFuncs
): Promise<UserCredential | null> => {
  const url: string = BACKEND_ADDRESS + '/userauthstatus'
  const existance = await UserFuncs.IsExist(url, email)
  if (existance) {
    return UserFuncs.SignIn(auth, email, password)
  }
  return null
}

const SignInWithGoogle = async (auth: Auth): Promise<void> => {
  const provider = new GoogleAuthProvider()
  await signInWithRedirect(auth, provider)
}

const SaveIdTokenToLocalStorage = async (auth: Auth): Promise<void> => {
  const idToken: string | null = auth.currentUser
    ? await getIdToken(auth.currentUser)
    : null
  if (idToken) {
    localStorage.setItem('idToken', idToken)
  }
}

export {
  auth,
  SignInWithEmail,
  SignUpWithEmail,
  SignInWithGoogle,
  SaveIdTokenToLocalStorage,
  UserFuncs
}
export type { UserFuncInterface }

