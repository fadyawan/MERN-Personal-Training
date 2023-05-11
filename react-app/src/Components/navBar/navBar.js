import { Stack, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import FlakyIcon from '@mui/icons-material/Flaky';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    white: {
        main: '#FFFFFF',
    },
});

function NavBar() {
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" aria-label="logo">
                        <FlakyIcon sx={{ color: theme.white.main }} aria-label='website-logo'/>
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }} aria-label='website-name'>
                        MERN PROJECT
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <div className='NavBar-Buttons'>
                            <Button sx={{ color: theme.white.main }} aria-label='home-button'>Home</Button>
                            <Button sx={{ color: theme.white.main }} aria-label='about-button'>About</Button>
                            <Button sx={{ color: theme.white.main }} aria-label='react-button'>React</Button>
                            <Button sx={{ color: theme.white.main }} aria-label='express-button'>Express</Button>
                        </div>
                    </Stack>
                </Toolbar>
            </AppBar>
        </ThemeProvider>

    )
}

export default NavBar;