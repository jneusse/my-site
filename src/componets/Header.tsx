import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Fade from '@mui/material/Fade'
import { styled } from '@mui/material/styles'
import { Grid, Link } from '@mui/material'

interface Props {
  window?: () => Window
  children?: React.ReactElement
}

function ScrollTop(props: Props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  })

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center'
      })
    }
  }

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  )
}

const CustomAppBar = styled(AppBar)(
  ({ theme }) => `
  boxShadow: none;
  background-color: ${theme.palette.background.default};
`
)

const CustomButton = styled(ButtonUnstyled)(
  ({ theme }) => `
    font-family: 'Encode Sans Expanded';
    font-weight: bold;
    font-size: 0.875rem;
    background-color: transparent;
    padding: 12px 0;
    margin: 0 24px;
    border-radius: 0px;
    color: ${theme.palette.primary.main};
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
    boxShadow: none;
    text-transform: uppercase;
  
    &:hover {
      border-bottom:  4px solid;
      borderColor: ${theme.palette.primary.main};
    }
  
    &.${buttonUnstyledClasses.active} {
      background-color: transparent;
    }
  
    &.${buttonUnstyledClasses.focusVisible} {
      outline: none;
    }
  
    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
    `
)

const Header = (props: Props) => {
  return (
    <>
      <CustomAppBar>
        <Container>
          <Toolbar>
            <Grid container direction="row" justifyContent="center">
              <Link href="#Home">
                <CustomButton>Home</CustomButton>
              </Link>
              <Link href="#About">
                <CustomButton>About</CustomButton>
              </Link>
              <Link href="#Resume">
                <CustomButton>Resume</CustomButton>
              </Link>
              <Link href="#Contact">
                <CustomButton>Contact</CustomButton>
              </Link>
              <Link href="#Demos">
                <CustomButton>Demos</CustomButton>
              </Link>
            </Grid>
          </Toolbar>
        </Container>
      </CustomAppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  )
}

export default Header
