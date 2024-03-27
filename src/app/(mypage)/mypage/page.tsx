'use client'
import { Inter, Rubik, Rubik_Dirt } from 'next/font/google'
import PersonalInfo from './address/_components/personal-info'
import TransactionList from './transaction/_components/transaction'
import { Text } from '@chakra-ui/react'
const Mypage = () => {
  return (
    <>
      <Text fontFamily={'beau_rivage'} fontSize="6xl">
        <p>mypage</p>
      </Text>
      <PersonalInfo />
      <TransactionList />
    </>
  )
}
export default Mypage
