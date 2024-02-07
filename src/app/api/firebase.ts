import { initializeApp, FirebaseApp } from 'firebase/app'
import {
  Auth,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  getIdToken,
} from 'firebase/auth'
import { IRequests } from './models/request'
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSEGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
}
interface UserAuthStatus {
  isExist: boolean
}
const app: FirebaseApp = initializeApp(firebaseConfig)
const auth: Auth = getAuth(app)

class FirebaseRequest {
  private Requests: IRequests
  constructor(Requests: IRequests) {
    this.Requests = Requests
  }
  SignUpWithEmail = async (
    auth: Auth,
    email: string,
    password: string,
  ): Promise<void> => {
    const response = await this.Requests.Post('/userauthstatus', { email: email })
    const data: UserAuthStatus = await response.json()
    if (!data.isExist) {
      await createUserWithEmailAndPassword(auth, email, password)
    }
  }

  SignInWithEmail = async (
    auth: Auth,
    email: string,
    password: string,
  ): Promise<void> => {
    const response = await this.Requests.Post('/userauthstatus', { email: email })
    const data: UserAuthStatus = await response.json()
    if (data.isExist) {
      await signInWithEmailAndPassword(auth, email, password)
    }
  }

  SignInWithGoogle = async (auth: Auth): Promise<void> => {
    const provider = new GoogleAuthProvider()
    await signInWithRedirect(auth, provider)
  }

  SaveIdTokenToLocalStorage = async (auth: Auth): Promise<void> => {
    const idToken: string | null = auth.currentUser
      ? await getIdToken(auth.currentUser)
      : null
    if (idToken) {
      localStorage.setItem('idToken', idToken)
    }
  }

}

export {
  FirebaseRequest,
  auth
}
