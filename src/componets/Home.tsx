import { Box, Grid, Typography, Container } from '@mui/material'
import { CustomAvatar } from './widgets/CustomAvatar'
import { styled } from '@mui/material/styles'

const CustomBox = styled(Box)(
  ({ theme }) => `
    border-bottom: 4px solid ${theme.palette.primary.main};
    padding-bottom:24px;
    box-sizing: content-box;
    transition: all 0.2s ease-in;
    &:hover {
        border-bottom: 16px solid ${theme.palette.primary.main};
      }
`
)

const CustomGrid = styled(Grid)(({ theme }) => ({
  minHeight: '100vh',
  [theme.breakpoints.down('md')]: {
    minHeight: '60vh',
    marginBottom: 40
  }
}))

interface IHomeProps {
  introduction: string
}

const Home: React.FunctionComponent<IHomeProps> = ({ introduction }) => {
  return (
    <Box
      id="Home"
      sx={{
        width: '100%',
        backgroundColor: 'transparent',
        minHeight: '100vh'
      }}
    >
      <Box
        sx={{
          height: '100%'
        }}
      >
        <Container>
          <Grid container direction={{ xs: 'column', sm: 'row' }}>
            <CustomGrid
              item
              xs={12}
              md={6}
              container
              direction="column"
              justifyContent="space-around"
              alignItems="center"
              // sx={{
              //   minHeight: '100vh'
              // }}
            >
              <Grid
                // mx="auto"
                className="animate__animated animate__backInLeft animate__delay-1s"
                sx={{ position: 'fixed' }}
              >
                <Grid
                  sx={{
                    width: '100%'
                  }}
                >
                  <CustomAvatar
                    alt="Jesus Eusse Developer"
                    src="/img/me and github.png"
                    sx={{ width: '50vh', height: '50vh' }}
                    className="animate__animated animate__pulse animate__slow	 animate__infinite"
                  />
                </Grid>
              </Grid>
            </CustomGrid>
            <Grid
              item
              xs={12}
              md={6}
              container
              direction="column"
              justifyContent="space-around"
              alignItems="center"
            >
              <Grid item>
                <CustomBox className="animate__animated animate__backInRight animate__delay-1s">
                  <Typography
                    variant="h2"
                    align="left"
                    className="text-shadow-black"
                  >
                    Hi, I'm Jesus Eusse
                  </Typography>
                  <Grid>
                    <Typography
                      variant="h3"
                      align="left"
                      className="text-shadow-black"
                    >
                      {introduction}
                    </Typography>
                  </Grid>
                </CustomBox>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Home
