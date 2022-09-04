import { Box, Grid, Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
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

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'transparent',
        padding: '24px 0'
      }}
    >
      <Container>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2 }}
          height="100%"
        >
          <Grid xs={12} md={6}>
            <Box mx="auto">
              <CustomAvatar
                alt="Jesus Eusse Developer"
                src="/img/me and github.png"
                sx={{ width: '600px', height: '600px' }}
                className="animate__animated animate__backInLeft animate__delay-1s"
              />
            </Box>
          </Grid>
          <Grid
            xs={12}
            md={6}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <CustomBox className="animate__animated animate__backInRight animate__delay-1s">
                <Typography variant="h2" align="left">
                  Hi, I'm Jesus Eusse
                </Typography>
                <Grid>
                  <Typography variant="h3" align="left">
                    I am a Full Stack Developer. Well-qualified Full Stack
                    Developer, familiar with wide range of programming utilities
                    and languages. Knowledgeable of backend and frontend
                    development requirements.
                  </Typography>
                </Grid>
              </CustomBox>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}

export default Home
