import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  IconButton,
  Link
} from '@mui/material'
import { styled } from '@mui/material/styles'
import SocialIcon from './widgets/SocialIcons'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  textAlign: 'center',
  color: theme.palette.primary.main
}))

interface IContactProps {
  socialMedia: Array<Record<string, string>>
}

const Contact: React.FunctionComponent<IContactProps> = ({ socialMedia }) => {
  return (
    <Box
      id="Contact"
      sx={{
        width: '100%',
        backgroundColor: 'transparent',
        padding: '24px 0',
        height: '100vh'
      }}
    >
      <Box
        sx={{
          width: '100%'
        }}
      >
        <Container>
          <Grid
            container
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2 }}
            height="100vh"
            width="100%"
          >
            <Grid item xs={12} md={6}></Grid>

            <Grid
              item
              xs={12}
              md={6}
              container
              direction="column"
              justifyContent="space-around"
              alignItems="center"
            >
              <Grid item ml={8}>
                <Box>
                  <Typography
                    variant="h2"
                    align="left"
                    mb={2}
                    textAlign="center"
                  >
                    Take a look on my social media!
                  </Typography>
                  <Grid container justifyContent="center">
                    {socialMedia.length &&
                      socialMedia.map(
                        (item) =>
                          SocialIcon[item.type] && (
                            <Item key={item.link}>
                              <IconButton
                                color="primary"
                                sx={{
                                  '&hover': { 'box-shadow': '5px 10px #888888' }
                                }}
                              >
                                <Link href={item.link} target="_blank">
                                  {SocialIcon[item.type]}
                                </Link>
                              </IconButton>
                            </Item>
                          )
                      )}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Contact
