'use client'

import { useParams } from 'next/navigation'

const UserId = () => {
  const params = useParams<{ slug: string }>()

  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  console.log(params)

  return <>userId:{params.slug}</>
}

const app = () => {
  return <UserId />
}

export default app
