'use client'

import { useParams } from 'next/navigation'

const Profile = () => {
  const params = useParams<{ slug: string }>()

  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  console.log(params)

  return <>userId:{params.slug}</>
}

export default Profile
