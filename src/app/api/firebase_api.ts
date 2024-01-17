import { initializeApp } from 'firebase/app'
import {
  Auth,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  deleteUser,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'

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

const signInToFirebase = async (
  auth: Auth,
  email: string,
  password: string,
) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  const user = userCredential.user
  const idToken = await user.getIdToken()
  return idToken
}

//SignUp　idTokenを返す
const signUpToFirebase = async (
  auth: Auth,
  email: string,
  password: string,
) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  )
  const user = userCredential.user
  const idToken = await user.getIdToken()
  return idToken
}

//SignOut
const signOutToFirebase = async (auth: Auth) => {
  await signOut(auth)
}

//ユーザの削除　サーバでも削除処理を行うのでidTokenを返す
const deleteUserToFirebase = async (auth: Auth) => {
  const user = auth.currentUser
  if (!user) return
  const idToken = await user.getIdToken()
  await deleteUser(auth.currentUser)
  return idToken
}
//アカウントのパスワードをリセット
const sendPasswordResetToFirebase = async (auth: Auth, email: string) => {
  await sendPasswordResetEmail(auth, email)
}

//認証メールを送る
const sendEmailVerificationToFirebase = async (auth: Auth) => {
  if (!auth.currentUser) return
  await sendEmailVerification(auth.currentUser)
}

//Email変更
const updateEmailTofirebase = async (auth: Auth, newEmail: string) => {
  if (!auth.currentUser) return
  await updateEmail(auth.currentUser, newEmail)
}

const googlePopupSignInToFirebase = async (auth: Auth) => {
  const provider = new GoogleAuthProvider()
  const user = await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      if (!credential) return
      const token = credential.accessToken
      // The signed-in user info.
      const user = result.user
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      console.log(token)
      console.log(user)
      return user
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.customData.email
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error)
      // ...
    })

  if (!user) return
  const idToken = await user.getIdToken()
  if (!idToken) return
  console.log(idToken)
  return idToken
}
export {
  auth,
  signInToFirebase,
  signUpToFirebase,
  signOutToFirebase,
  deleteUserToFirebase,
  updateEmailTofirebase,
  sendPasswordResetToFirebase,
  sendEmailVerificationToFirebase,
  googlePopupSignInToFirebase,
}
