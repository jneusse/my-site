import { Box, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { styled } from '@mui/material/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'

const CustomBox = styled(Box)(
  ({ theme }) => `
      background-color: ${theme.palette.secondary.main};
      padding: 48px;
      position: relative;
      height: 100vh
  `
)

interface IUnderConstructionProps {}

const UnderConstruction: React.FunctionComponent<IUnderConstructionProps> = (
  props
) => {
  return (
    <CustomBox>
      <Container sx={{ height: '100%' }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Box>
            <Typography
              variant="poster"
              align="center"
              fontSize={{ md: 64, sm: 48, xs: 24 }}
            >
              WEBSITE UNDER CONSTRUCTION
            </Typography>
          </Box>
          <Box>
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              color="#ff9c00"
              size="10x"
              bounce
            />
          </Box>
        </Grid>
      </Container>
    </CustomBox>
  )
}

export default UnderConstruction
