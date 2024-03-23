import { useRouter } from 'next/navigation'
import { useAuthContext } from '@/app/contexts/AuthContext'
import { useEffect, useState } from 'react'
import User from './_components/user'
const Mypage = () => {
  return (
    <>
      {' '}
      <p>マイページ</p>
      <User />
    </>
  )
}
export default Mypage
