'use client'
import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { addressSchema } from '@/api/lib/schema/address'

export default function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(addressSchema),
  })

  function onSubmit(values: any) {
    console.log(values)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={Boolean(errors.phone_number)}>
        <FormLabel htmlFor="phone_number">phone_number</FormLabel>
        <Input
          id="phone_number"
          placeholder="電話番号"
          {...register('phone_number')}
        />
        <FormErrorMessage>{errors.phone_number?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.zip_code)}>
        <FormLabel htmlFor="zip_code">zip_code</FormLabel>
        <Input id="zip_code" placeholder="郵便番号" {...register('zip_code')} />
        <FormErrorMessage>{errors.zip_code?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.address_1)}>
        <FormLabel htmlFor="address_1">address_1</FormLabel>
        <Input id="address_1" placeholder="住所1" {...register('address_1')} />
        <FormErrorMessage>{errors.address_1?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.address_2)}>
        <FormLabel htmlFor="address_2">address_2</FormLabel>
        <Input id="address_2" placeholder="住所2" {...register('address_2')} />
        <FormErrorMessage>{errors.address_2?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.address_3)}>
        <FormLabel htmlFor="address_3">address_3</FormLabel>
        <Input id="address_3" placeholder="住所3" {...register('address_3')} />
        <FormErrorMessage>{errors.address_3?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.last_name)}>
        <FormLabel htmlFor="last_name">last_name</FormLabel>
        <Input id="last_name" placeholder="名" {...register('last_name')} />
        <FormErrorMessage>{errors.last_name?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.first_name)}>
        <FormLabel htmlFor="first_name">first_name</FormLabel>
        <Input id="first_name" placeholder="姓" {...register('first_name')} />
        <FormErrorMessage>{errors.first_name?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.last_name_kana)}>
        <FormLabel htmlFor="last_name_kana">last_name_kana</FormLabel>
        <Input
          id="last_name_kana"
          placeholder="名カナ"
          {...register('last_name_kana')}
        />
        <FormErrorMessage>{errors.last_name_kana?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={Boolean(errors.first_name_kana)}>
        <FormLabel htmlFor="first_name_kana">first_name_kana</FormLabel>
        <Input
          id="first_name_kana"
          placeholder="姓カナ"
          {...register('first_name_kana')}
        />
        <FormErrorMessage>{errors.first_name_kana?.message}</FormErrorMessage>
      </FormControl>

      <Button
        mt={4}
        colorScheme="teal"
        isLoading={isSubmitting}
        type="submit"
        onClick={() => {
          console.log(errors)
        }}
      >
        Submit
      </Button>
    </form>
  )
}
