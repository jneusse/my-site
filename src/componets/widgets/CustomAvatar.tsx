import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'

export const CustomAvatar = styled(Avatar)(({ theme }) => ({
  border: `8px solid ${theme.palette.primary.main}`,
  boxSizing: 'border-box',
  transition: 'all 0.2s ease-in',
  '&:hover': {
    border: '16px solid',
    borderColor: `${theme.palette.primary.main}`
  }
}))
