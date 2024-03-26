import { ItemRequestImpl } from '@/api/lib/instances'
const Images = async (props: { itemId: string }) => {
  const images = await ItemRequestImpl.getItemSource(props.itemId)

  return (
    <>
      {images?.map((url, index) => {
        return (
          <div key={index}>
            <img src={url} alt="image" />
          </div>
        )
      })}
    </>
  )
}

export default Images
