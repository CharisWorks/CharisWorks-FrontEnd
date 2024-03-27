import Badge from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {
  ThemeProvider as MaterialThemeProvider,
  createTheme as muiCreateTheme,
  THEME_ID,
} from '@mui/material/styles'
import { getCart } from '@/api/fetcher'
import { useAuthContext } from '@/app/contexts/AuthContext'
import { useEffect, useState } from 'react'

const Cart = () => {
  const materialTheme = muiCreateTheme()
  const { data, isLoading, error } = getCart(useAuthContext().idToken)
  const [quantity, setQuantity] = useState(0)
  useEffect(() => {
    let total = 0
    if (data?.items) {
      data.items.forEach((item) => {
        total += item.quantity
      })
    }
    setQuantity(total)
  }, [data])
  return (
    <MaterialThemeProvider theme={{ [THEME_ID]: materialTheme }}>
      <a href="/mypage/cart">
        <Badge badgeContent={quantity} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </a>
    </MaterialThemeProvider>
  )
}
export default Cart
