import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import InstagramIcon from '@mui/icons-material/Instagram'
import { LinkedIn } from '@mui/icons-material'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  textAlign: 'center',
  color: theme.palette.primary.main
}))

interface IContactProps {}

const Contact: React.FunctionComponent<IContactProps> = (props) => {
  return (
    <Box
      id="Contact"
      sx={{
        width: '100%',
        backgroundColor: 'transparent',
        padding: '24px 0',
        height: '600px'
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
                  <Stack direction="row" spacing={2} justifyContent="center">
                    <Item>
                      <InstagramIcon sx={{ fontSize: 64 }} />
                    </Item>
                    <Item>
                      <LinkedIn sx={{ fontSize: 64 }} />
                    </Item>
                    <Item>
                      <TwitterIcon sx={{ fontSize: 64 }} />
                    </Item>
                    <Item>
                      <YouTubeIcon sx={{ fontSize: 64 }} />
                    </Item>
                  </Stack>
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
