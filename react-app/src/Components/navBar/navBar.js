import * as React from 'react';
import {
    Stack,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    ClickAwayListener,
    Grow,
    Paper,
    Popper,
    MenuItem,
    MenuList,
} from '@mui/material';
import FlakyIcon from '@mui/icons-material/Flaky';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    white: {
        main: '#FFFFFF',
    },
});

function NavBar() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton href='/' size="large" edge="start" aria-label="logo">
                        <FlakyIcon sx={{ color: theme.white.main }} aria-label='website-logo' />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }} aria-label='website-name'>
                        MERN PROJECT
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <div className='NavBar-Buttons'>
                            <Button href='/' sx={{ color: theme.white.main }} aria-label='home-button'>Home</Button>
                            <Button href='/about' sx={{ color: theme.white.main }} aria-label='about-button'>About</Button>
                            <Button
                                sx={{ color: theme.white.main }}
                                ref={anchorRef}
                                id="composition-button"
                                aria-controls={open ? 'composition-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleToggle}
                                aria-label='react-button'
                                >
                                MERN Tech
                            </Button>
                            <Popper
                                open={open}
                                anchorEl={anchorRef.current}
                                role={undefined}
                                placement="bottom-start"
                                transition
                                disablePortal
                            >
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{
                                            transformOrigin:
                                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                                        }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleClose}>
                                                <MenuList
                                                    autoFocusItem={open}
                                                    id="composition-menu"
                                                    aria-labelledby="composition-button"
                                                    onKeyDown={handleListKeyDown}
                                                >
                                                    <MenuItem component='a' href='/react' onClick={handleClose}>React</MenuItem>
                                                    <MenuItem component='a' href='/express'  onClick={handleClose}>Express</MenuItem>
                                                    <MenuItem component='a' href='/node'  onClick={handleClose}>Node</MenuItem>
                                                    <MenuItem component='a' href='/mongo'  onClick={handleClose}>MongoDB</MenuItem>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </div>
                    </Stack>
                </Toolbar>
            </AppBar>
        </ThemeProvider>

    )
}

export default NavBar;