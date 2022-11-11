import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Link
} from '@mui/material'
import { styled } from '@mui/material/styles'

const CustomBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.neutral.main,
  minHeight: '100vh',
  width: '100%',
  position: 'relative'
}))

const Demos = () => {
  return (
    <CustomBox id="Demos">
      <Container>
        <Grid container flexDirection="column" justifyContent="space-around">
          <Grid item>
            <Grid
              container
              flexDirection="row"
              justifyContent="center"
              py={8}
              spacing={4}
            >
              <Grid item>
                <Card sx={{ width: '300px', height: '450px' }}>
                  <CardMedia
                    component="img"
                    height="300px"
                    image="/img/the_movies_app.png"
                    alt="The movies app"
                    sx={{ objectFit: 'center' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      The movies App
                    </Typography>
                    <Typography variant="body2">
                      This is just a little demo developed with{' '}
                      <Link href="https://flutter.dev/" target="_blank">
                        flutter
                      </Link>{' '}
                      and available in Play Store for free.
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center' }}>
                    <Button size="large">
                      <Link
                        href="https://play.google.com/store/apps/details?id=com.jesusdev.movies_app"
                        target="_blank"
                      >
                        Open
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item>
                <Card sx={{ width: '300px', height: '450px' }}>
                  <CardMedia
                    component="img"
                    height="300px"
                    image="/img/my_store.png"
                    alt="My store"
                    sx={{ objectFit: 'center' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      My store
                    </Typography>
                    <Typography variant="body2">
                      This is a project in progress
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center' }}>
                    <Button size="large">
                      <Link
                        href="https://my-store.jesus-dev.com/"
                        target="_blank"
                      >
                        Open
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item>
                <Card sx={{ width: '300px', height: '450px' }}>
                  <CardMedia
                    component="img"
                    height="300px"
                    image="/img/daph_web.png"
                    alt="DAPh APP"
                    sx={{ objectFit: 'center' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      DAPh APP - Daily Awesome Phrases
                    </Typography>
                    <Typography variant="body2">
                      This is a project in progress
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center' }}>
                    <Button size="large">
                      <Link href="https://daph.jesus-dev.com/" target="_blank">
                        Open
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </CustomBox>
  )
}

export default Demos
