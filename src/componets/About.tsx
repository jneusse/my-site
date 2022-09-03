import { Box, Grid, Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
import { CustomAvatar } from './widgets/CustomAvatar'

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'transparent'
      }}
    >
      <Container>
        <Grid direction="row" container spacing={24}>
          <Grid item xs={12} md={6}>
            <Box mx="auto">
              <CustomAvatar
                alt="Jesus Eusse Developer"
                src="/img/me and github.png"
                sx={{ width: '600px', height: '600px' }}
              />
            </Box>
          </Grid>
          <Grid item container xs={12} md={6} height="100%">
            <Grid item width="100%" mx="auto" my="auto">
              <Typography variant="h2" align="left">
                Hi! I'm Jesus Eusse
              </Typography>
              <br />
              <Typography variant="h3" align="left">
                I'm a fullstack developer
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default About
