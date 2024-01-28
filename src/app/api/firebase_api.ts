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

interface UserInterface {
  IsExist(): Promise<boolean>
  SignUp(): Promise<UserCredential>
  SignIn(): Promise<UserCredential>
}

class User implements UserInterface {
  private url: string = BACKEND_ADDRESS + '/userauthstatus'
  private auth: Auth
  private email: string
  private password: string

  constructor(auth: Auth, email: string, password: string) {
    this.auth = auth
    this.email = email
    this.password = password
  }

  async IsExist(): Promise<boolean> {
    const url = this.url
    const response = await axios.post(url, { email: this.email })
    const data: UserAuthStatus = response.data.json()
    return data.isExist
  }

  async SignUp(): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, this.email, this.password)
  }
  async SignIn(): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, this.email, this.password)
  }
}

const SignUpWithEmail = async (
  User: UserInterface,
): Promise<UserCredential | null> => {
  const existance = await User.IsExist()
  if (!existance) {
    return User.SignUp()
  }
  return null
}

const SignInWithEmail = async (
  User: UserInterface,
): Promise<UserCredential | null> => {
  const existance = await User.IsExist()
  if (existance) {
    return User.SignIn()
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
}

export type { UserInterface }
