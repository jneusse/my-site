import { Box, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Container } from '@mui/system'

const AboutBox = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.palette.secondary.main};
    position: relative;
`
)

const SquareBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  aspectRatio: '1 / 1',
  width: '80%',
  padding: '24px',
  border: `16px solid ${theme.palette.primary.main}`,
  transition: `all 0.2s ease-in`,
  '&:hover': {
    border: `8px solid ${theme.palette.primary.main}`
  },
  '&:hover #typo1': {
    fontSize: '26px'
  }
}))

const CustomTypo = styled(Typography)(
  ({ theme }) => `
      word-break: break-work;
      hyphens: auto;
    `
)

interface IAboutProps {
  about: string
}

const About: React.FunctionComponent<IAboutProps> = ({ about }) => {
  return (
    <>
      <Box id="About" height="64px"></Box>
      <AboutBox py={4}>
        <Container>
          <Grid container direction="row" height="100%">
            <Grid item xs={12} md={6} p={0} mb={{ xs: 4, lg: 0 }}>
              <Typography variant="h2" align="left" mb={2}>
                About me
              </Typography>
              <CustomTypo variant="h3" align="left" lang="en-US">
                {about}
              </CustomTypo>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <SquareBox>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  height="100%"
                >
                  <Box>
                    <Typography id="typo1" variant="h3" align="center">
                      I also know how to center a div
                    </Typography>
                  </Box>
                </Grid>
              </SquareBox>
            </Grid>
          </Grid>
        </Container>
      </AboutBox>
    </>
  )
}

export default About
