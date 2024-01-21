import axios from 'axios'

const ADDRESS: string | undefined = process.env.NEXT_PUBLIC_SERVER_ADDRESS

const GetUser = async () => {
  if (URL != undefined) {
    const URL = ADDRESS + '/user'
    const response = await axios.get(URL)
    switch (response.status) {
      case 200:

      case 400:
    }
  }
  return { idToken: null, message: 'server address is not defined' }
}
