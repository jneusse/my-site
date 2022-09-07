import { Box, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Container } from '@mui/system'

const AboutBox = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.palette.neutral.main};
    padding: 48px;
    position: relative;
`
)

const SquareBox = styled(Box)(
  ({ theme }) => `
    background-color: transparent;
    height:250px;
    width: 250px;
    padding: 24px;
    border: 16px solid ${theme.palette.primary.main};
    transition: all 0.2s ease-in;
    &:hover {
        border: 8px solid ${theme.palette.primary.main};
    }
    &:hover #typo1 {
        font-size: 26px;
    }
  `
)

const CustomTypo = styled(Typography)(
  ({ theme }) => `
      word-break: break-work;
      hyphens: auto;
    `
)

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return (
    <AboutBox>
      <Container>
        <Grid
          container
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 4 }}
          height="100%"
        >
          <Grid xs={12} md={6}>
            <Typography variant="h2" align="left" mb={2}>
              About me
            </Typography>
            <CustomTypo variant="h3" align="left" lang="en-US">
              Well-qualified Full Stack Developer, familiar with wide range of
              programming utilities and languages. Knowledgeable of backend and
              frontend development requirements. Handles any part of process
              with ease. Collaborative team player with excellent technical
              abilities, offering 3 years of related experience. Enthusiastic
              technical professional, with complete understanding of entire
              software development lifecycle. Highly trained in Backend and
              Frontend and known for having talents in Javascript and HTML.
            </CustomTypo>
          </Grid>
          <Grid
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
  )
}

export default About
