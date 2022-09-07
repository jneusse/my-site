import { Box, Card, Container, Grid, Link, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Stack } from '@mui/system'

const SectionBox = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.palette.background.default};
    padding: 48px;
    height: 600px;
    position: relative;
`
)

interface IResumeProps {}

const Resume: React.FunctionComponent<IResumeProps> = (props) => {
  return (
    <SectionBox>
      <Container>
        <Grid container direction="row">
          <Grid item xs={12} md={6} px={4} mb={8}>
            <Typography component="h2" variant="h2" align="right" mb={2}>
              Education
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} px={4} mb={8}>
            <Typography component="h4" variant="h4" align="left" mb={2}>
              Universidad Alejandro de Humboldt
            </Typography>
            <Typography align="left">Computer Engineer - Nov 2018</Typography>
          </Grid>
          <Grid item xs={12} md={6} px={4} mb={8}>
            <Typography component="h2" variant="h2" align="right" mb={2}>
              Work
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} px={4} mb={8}>
            <Typography component="h4" variant="h4" align="left" mb={2}>
              Z-Tech
            </Typography>
            <Typography component="h5" variant="h5" align="left">
              Full Stack Developer | Abr 2022 - Currently
            </Typography>
            <Typography component="p" variant="body1" align="left" paragraph>
              Coded web-apps using REACT. Created components to improve user
              experience. Implemented hooks from custom libraries Created end
              points in NodeJS according frontend requirements. Reviewed code to
              implement good practices and readable code/ Planned sprint and
              stories
            </Typography>
            <Typography component="h4" variant="h4" align="left" mb={2}>
              Underdog
            </Typography>
            <Typography component="h5" variant="h5" align="left">
              Full Stack Developer | Jun 2021 - Apr 2022
            </Typography>
            <Typography component="p" variant="body1" align="left" paragraph>
              Created styles in SCSS. Layout in css according to the given
              design. Created features in ReactJS according to the given
              pattern. Inserted Google Ads. Created API for GraphQL using
              apollo-server.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Grid item xs={4}>
                <Typography variant="body1" align="left">
                  <Link href="http://culturacolectiva.com">
                    culturacolectiva.com
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body1" align="left">
                  <Link href="http://culturacolectiva.com">ecoosfera.com</Link>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body1" align="left">
                  <Link href="http://culturacolectiva.com">elfildeo.com</Link>
                </Typography>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </SectionBox>
  )
}

export default Resume
