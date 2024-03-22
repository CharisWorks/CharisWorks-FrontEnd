import { Auth, User } from 'firebase/auth'
interface IAuthAppRequests {
    SignUpWithEmail(auth: Auth, email: string, password: string): Promise<void>
    SignInWithEmail(auth: Auth, email: string, password: string): Promise<void>
}
export type { IAuthAppRequests }