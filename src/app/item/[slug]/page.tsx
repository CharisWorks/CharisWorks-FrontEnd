'use client'
import { ItemRequestImpl } from '@/app/api/lib/firebase'
import { ItemDetail } from '@/app/api/models/item'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const ItemPage = () => {
  const params = useParams<{ slug: string }>()

  const [Item, setItem] = useState<ItemDetail | undefined>(undefined)
  useEffect(() => {
    ;(async () => {
      const item = await ItemRequestImpl.GetDetail(params.slug)
      setItem(item)
    })()
  }, [])

  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  console.log(params)
  return (
    <>
      <h2>商品詳細ページ</h2>itemId:{params.slug}
    </>
  )
}
export default ItemPage
