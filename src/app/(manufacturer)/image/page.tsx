'use client'
import { useForm } from 'react-hook-form'
import imageCompression from 'browser-image-compression'
import PhotosUpload from './PhotosUpload'
import { useState } from 'react'
import { auth } from '@/api/firebase'
import { useAuthContext } from '@/app/contexts/AuthContext'

type Inputs = {
  email: string
  phone: string
}

const ImageComponent = () => {
  const [response, setResponse] = useState<any>('')

  const [imageURLs, setImageURLs] = useState<string[]>([''])

  const handleFetchImages = async () => {
    try {
      const res = await fetch('http://localhost:8080/images/test1', {
        method: 'GET',
      })

      const blob = await res.json()
      console.log(blob)
      setImageURLs(blob)
    } catch (error) {
      console.error('Failed to fetch images:', error)
    }
  }

  return (
    <div>
      <button onClick={handleFetchImages}>Fetch Images</button>
      {imageURLs?.map((url, index) => (
        <img key={index} src={url} alt={`Fetched Image ${index}`} />
      ))}
    </div>
  )
}
const Questionnaire = () => {
  const user = useAuthContext()
  const { register, setError, handleSubmit } = useForm<Inputs>({
    mode: 'onBlur',
  })
  const [photos, setPhotos] = useState<File[]>([])
  const [imageURL, setImageURL] = useState<string | null>(null)
  const [url, setUrl] = useState<string>('')
  const onSubmit = async (data: Inputs): Promise<void> => {
    const { email, phone } = data
    if (photos.length === 0) {
      // アンケートフォームが空の場合はPOSTしない
      return
    }

    // 画像を送信できるようにFormDataに変換する
    const formData = new FormData()
    const compressOptions = {
      // 3MB以下に圧縮する
      maxSizeMB: 3,
    }
    const compressedPhotoData = await Promise.all(
      photos.map(async (photo) => {
        return {
          blob: await imageCompression(photo, compressOptions),
          name: photo.name,
        }
      }),
    )
    compressedPhotoData.forEach((photoData) => {
      formData.append('photo', photoData.blob, photoData.name)
    })

    let idToken
    if (user) {
      idToken = await user.getIdToken()
    }
    console.log(auth.currentUser?.email)
    console.log(compressedPhotoData)
    const res = await fetch('http://localhost:8080/images/test1', {
      method: 'POST',
      body: formData,
      headers: {
        authorization: 'Bearer ' + idToken,
      },
    })
    console.log(res)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <PhotosUpload name="photos" photos={photos} setPhotos={setPhotos} />
        </div>
        <div>
          <button>post</button>
        </div>
      </form>
      aaaa
      <button
        onClick={async () => {
          const res = await fetch('http://localhost:8080/images/test1', {
            method: 'GET',
          })
          console.log('get')
          console.log(res)
          const blob = await res.blob()
          console.log(blob)
          var url = window.URL.createObjectURL(blob)
          setUrl(url)
        }}
      />
      <ImageComponent />
      <button
        onClick={async () => {
          let idToken
          if (user) {
            idToken = await user.getIdToken()
          }
          const res = await fetch('http://localhost:8080/api/products/test1', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              authorization: 'Bearer ' + idToken,
            },
          })
          console.log('get')
          console.log(res)
          const blob = await res.blob()
          console.log(blob)
          var url = window.URL.createObjectURL(blob)
          setUrl(url)
        }}
      >
        delete
      </button>
    </>
  )
}
export default Questionnaire
