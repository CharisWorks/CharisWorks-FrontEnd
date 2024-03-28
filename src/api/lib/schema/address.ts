'use client'
import * as yup from 'yup'
const requiredMessage = 'この項目は必須です'
export const addressSchema = yup.object().shape({
    first_name: yup.string().required(requiredMessage),
    first_name_kana: yup
        .string()
        .matches(/^([ァ-ン]|ヴ|ー)*$/, 'カタカナで入力してください')
        .required(requiredMessage),
    last_name: yup.string().required(requiredMessage),
    last_name_kana: yup.string().matches(/^([ァ-ン]|ヴ|ー)*$/, 'カタカナで入力してください').required(requiredMessage),
    zip_code: yup.string().matches(/^\d{3}-?\d{4}$/, '郵便番号の形式が正しくありません').required(requiredMessage),
    address_1: yup.string().required(requiredMessage),
    address_2: yup.string().required(requiredMessage),
    address_3: yup.string(),
    phone_number: yup.string().matches(/^\d{3}-\d{4}-\d{4}$|^0[-\d]{10}$/, '電話番号の形式が正しくありません').required(requiredMessage),
})

