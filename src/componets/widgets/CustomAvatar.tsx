import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/system'

export const CustomAvatar = styled(Avatar)(
  ({ theme }) => `
  border: 8px solid ${theme.palette.primary.main};
  box-sizing: border-box;
  transition: all 0.2s ease-in;
  &:hover {
    border:  16px solid;
    border-color: ${theme.palette.primary.main};
  }
`
)
