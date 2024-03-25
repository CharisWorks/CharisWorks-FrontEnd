import { Suspense } from 'react'

export default function MypageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <main>{children}</main>
      </Suspense>
    </div>
  )
}
