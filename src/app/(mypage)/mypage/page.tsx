import { AuthRequiredProvider } from '@/app/contexts/UserContext'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '@/app/contexts/AuthContext'
import { useEffect, useState } from 'react'
import User from './_components/user'
const Mypage = () => {
  return (
    <AuthRequiredProvider>
      {' '}
      <p>マイページ</p>
      <User />
    </AuthRequiredProvider>
  )
}
export default Mypage
