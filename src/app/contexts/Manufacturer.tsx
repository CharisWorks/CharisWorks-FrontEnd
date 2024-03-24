'use client'
import React, {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
  use,
} from 'react'
import type { User } from 'firebase/auth'
import { auth } from '../../api/firebase'
import { usePathname, useRouter } from 'next/navigation'

export const ManufacturerContext = createContext<void>(undefined)
interface Props {
  children: ReactNode
}

const ManufacturerProvider = ({ children }: Props) => {
  console.log('ManufacturerProvider')
  return (
    <ManufacturerContext.Provider value={undefined}>
      {children}
    </ManufacturerContext.Provider>
  )
}

export { ManufacturerProvider }
