import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import { Stack } from '@mui/material'
import logo from '../../logo.svg';

function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" aria-label="logo">
                    <logo />
                </IconButton>
            <Typography variant="h6" componenet="div" sx={{ flexGrow: 1}}>
                MERN PROJECT
            </Typography>
            <Stack direction="row" spacing={2}>
                <Button>Home</Button>
                <Button>About</Button>
                <Button>React</Button>
                <Button>Express</Button>
            </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;