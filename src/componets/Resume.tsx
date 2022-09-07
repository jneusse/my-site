import { Box, Container, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const SectionBox = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.palette.background.default};
    padding: 48px;
    height: 600px;
    width: 100%;
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
            <Typography variant="h2" align="right" mb={2}>
              Education
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} px={4} mb={8}>
            <Typography variant="h4" align="left" mb={2}>
              Universidad Alejandro de Humboldt
            </Typography>
            <Typography align="left">Computer Engineer - Nov 2018</Typography>
          </Grid>
          <Grid item xs={12} md={6} px={4} mb={8}>
            <Typography variant="h2" align="right" mb={2}>
              Work
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} px={4} mb={8}>
            <Typography variant="h4" align="left" mb={2}>
              Universidad Alejandro de Humboldt
            </Typography>
            <Typography align="left">Computer Engineer - Nov 2018</Typography>
          </Grid>
        </Grid>
      </Container>
    </SectionBox>
  )
}

export default Resume
