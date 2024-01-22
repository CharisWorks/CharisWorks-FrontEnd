import axios from 'axios'
const ADDRESS: string | undefined = process.env.NEXT_PUBLIC_SERVER_ADDRESS

interface Manufacturer {}
interface ManufacturerResponseFromServer {
  Manufacturer: Manufacturer
  message: string
}
const GetManufacturer = async (): Promise<ManufacturerResponseFromServer> => {
  const URL = ADDRESS + '/manufacturer'
  const response = await axios.get(URL)
  const data: ManufacturerResponseFromServer = response.data.json()
  return data
}
