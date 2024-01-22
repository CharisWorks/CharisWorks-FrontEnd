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
const auth = getAuth(app)

interface UserAuthStatus {
  isExist: boolean
}

const SignUpWithEmail = async (
  auth: Auth,
  email: string,
  password: string,
): Promise<void> => {
  const URL = BACKEND_ADDRESS + '/userauthstatus'
  const response = await axios.post(URL, { email: email })
  const data: UserAuthStatus = response.data.json()

  if (!data.isExist) {
    await createUserWithEmailAndPassword(auth, email, password)
  }
}

const SignInWithEmail = async (
  auth: Auth,
  email: string,
  password: string,
): Promise<void> => {
  const URL = BACKEND_ADDRESS + '/userauthstatus'
  const response = await axios.post(URL, { email: email })
  const data: UserAuthStatus = response.data.json()

  if (data.isExist) {
    await signInWithEmailAndPassword(auth, email, password)
  }
}

const SignInWithGoogle = async (auth: Auth): Promise<void> => {
  const provider = new GoogleAuthProvider()
  await signInWithRedirect(auth, provider)
}

const SaveIdTokenToLocalStorage = async (auth: Auth): Promise<void> => {
  const IdToken: string | null = auth.currentUser
    ? await getIdToken(auth.currentUser)
    : null
  if (IdToken) {
    localStorage.setItem('idToken', IdToken)
  }
}

export {
  auth,
  SignInWithEmail,
  SignUpWithEmail,
  SignInWithGoogle,
  SaveIdTokenToLocalStorage,
}
