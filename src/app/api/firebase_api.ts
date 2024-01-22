import { initializeApp } from 'firebase/app'
import axios from 'axios'
import {
  Auth,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getIdTokenResult,
  IdTokenResult,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
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

interface UserAuthStatus {
  IsExist: boolean
}

const SignUpWithEmail = async (
  auth: Auth,
  email: string,
  password: string,
): Promise<IdTokenResult | null> => {
  const URL = ADDRESS + '/userauthstatus'
  const response = await axios.post(URL, { email: email })
  const data: UserAuthStatus = response.data.json()

  if (data.IsExist == false) {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )
    return getIdTokenResult(userCredential.user)
  }

  return null
}

const SignInWithEmail = async (
  auth: Auth,
  email: string,
  password: string,
): Promise<IdTokenResult | null> => {
  const URL = ADDRESS + '/userauthstatus'
  const response = await axios.post(URL, { email: email })
  const data: UserAuthStatus = response.data.json()

  if (data.IsExist == true) {
    const userCredential: UserCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    )
    return getIdTokenResult(userCredential.user)
  }

  return null
}

const SignInWithGoogle = async (auth: Auth): Promise<IdTokenResult | null> => {
  const provider = new GoogleAuthProvider()
  await signInWithRedirect(auth, provider)
  const user: User | null = auth.currentUser
  return user ? getIdTokenResult(user) : null
}

export { auth, SignInWithEmail, SignUpWithEmail, SignInWithGoogle }
