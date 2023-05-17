import './AboutPage.css';
import NavBar from '../../Components/NavBar/NavBar';
import { Typography, Button, Stack } from '@mui/material';

function AboutPage() {
    return (
        <div>
            <NavBar />
            <div className='Content'>
                <Typography variant='h6'>About Moi</Typography>
            </div>
        </div>
    )
}

export default AboutPage;