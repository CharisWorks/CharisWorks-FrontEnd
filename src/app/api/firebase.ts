import { initializeApp, FirebaseApp } from 'firebase/app'
import {
  Auth,
  User,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  getIdToken,
} from 'firebase/auth'

import { IRequests } from './models/request'
import { IAuthAppRequests } from './models/firebase'
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

class FirebaseRequests implements IAuthAppRequests {
  private Requests: IRequests
  constructor(Requests: IRequests) {
    this.Requests = Requests
  }
  async SignUpWithEmail(
    auth: Auth,
    email: string,
    password: string,
  ): Promise<void> {
    const response = await this.Requests.Post('/userauthstatus', { email: email })
    const data: UserAuthStatus = await response.json()
    if (!data.isExist) {
      await createUserWithEmailAndPassword(auth, email, password)
    }
  }

  async SignInWithEmail(
    auth: Auth,
    email: string,
    password: string,
  ): Promise<void> {
    const response = await this.Requests.Post('/userauthstatus', { email: email })
    const data: UserAuthStatus = await response.json()
    if (data.isExist) {
      await signInWithEmailAndPassword(auth, email, password)
    }
  }

  async SignInWithGoogle(auth: Auth): Promise<void> {
    const provider = new GoogleAuthProvider()
    await signInWithRedirect(auth, provider)
  }

  async SaveIdTokenToLocalStorage(user: User): Promise<void> {
    const idToken: string | null = user
      ? await getIdToken(user)
      : null
    if (idToken) {
      localStorage.setItem('idToken', idToken)
    }
  }

}

export {
  FirebaseRequests,
  auth
}
