import { auth } from '@/api/firebase'
import { FirebaseRequestImpl } from '@/api/lib/instances'

export const LogInUsers: React.FC = () => {
  const users: { name: string; email: string; password: string }[] = [
    {
      name: 'hoge(email is not verified)',
      email: 'hoge@example.com',
      password: 'example',
    },
    {
      name: 'cotton(email is verified)',
      email: 'cowatanabe26@gmail.com',
      password: 'example',
    },
  ]
  return (
    <>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <button
              key={index}
              onClick={() => {
                FirebaseRequestImpl.SignInWithEmail(
                  auth,
                  user.email,
                  user.password,
                )
              }}
            >
              <p>{user.name}</p>
            </button>
          </div>
        )
      })}
    </>
  )
}
