import InstagramIcon from '@mui/icons-material/Instagram'
import { LinkedIn } from '@mui/icons-material'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'
import { theme } from '../../config/theme'

const SocialIcon: Record<string, JSX.Element> = {
  instagram: (
    <InstagramIcon
      sx={{
        fontSize: 64,
        '&:hover': { color: theme.palette.primary.darker },
        transition: 'all 150ms ease'
      }}
    />
  ),
  linkedin: (
    <LinkedIn
      sx={{
        fontSize: 64,
        '&:hover': { color: theme.palette.primary.darker },
        transition: 'all 150ms ease'
      }}
    />
  ),
  twitter: (
    <TwitterIcon
      sx={{
        fontSize: 64,
        '&:hover': { color: theme.palette.primary.darker },
        transition: 'all 150ms ease'
      }}
    />
  ),
  youtube: (
    <YouTubeIcon
      sx={{
        fontSize: 64,
        '&:hover': { color: theme.palette.primary.darker },
        transition: 'all 150ms ease'
      }}
    />
  ),
  whatsapp: (
    <WhatsAppIcon
      sx={{
        fontSize: 64,
        '&:hover': { color: theme.palette.primary.darker },
        transition: 'all 150ms ease'
      }}
    />
  ),
  telegram: (
    <TelegramIcon
      sx={{
        fontSize: 64,
        '&:hover': { color: theme.palette.primary.darker },
        transition: 'all 150ms ease'
      }}
    />
  )
}

export default SocialIcon
