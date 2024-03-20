import { initializeApp, FirebaseApp, getApps, getApp } from 'firebase/app'
import {
  Auth,
  User,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  getIdToken,
  connectAuthEmulator,
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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


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
    await createUserWithEmailAndPassword(auth, email, password)
  }

  async SignInWithEmail(
    auth: Auth,
    email: string,
    password: string,
  ): Promise<void> {
    await signInWithEmailAndPassword(auth, email, password)
  }
  async SignInWithGoogle(auth: Auth): Promise<void> {
    const provider = new GoogleAuthProvider()
    await signInWithRedirect(auth, provider)
  }

}

export {
  FirebaseRequests,
  auth
}
