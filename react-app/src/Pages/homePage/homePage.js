import './HomePage.css';
import NavBar from '../../Components/NavBar/NavBar';
import MernStackPicture from '../../Assets/HomePageAssets/mern-stack-picture.png';
import { Typography, Button, Stack } from '@mui/material';

function HomePage() {
    return (
        <div>
            <NavBar />
            <div className='Content'>
                <img src={MernStackPicture} className='MainPicture' alt='MERN Logo'/>
                <div className='ShortText'>
                    <Typography variant='h6' aria-label='home-page-text-1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                    <br />
                    <Typography variant='h6' aria-label='home-page-text-2'>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                        numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                        nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                        iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                        voluptas nulla pariatur
                    </Typography>
                    <br />
                    <Typography variant='h6' aria-label='home-page-text-2'>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
                        cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda
                        est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
                        ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                        reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                    </Typography>
                </div>
                <br />
                <br />
                <br />
                <div className='NavigationButtons'>
                    <Stack direction='row' spacing={15}>
                        <Button variant='outlined' style={{ maxWidth: '500px', minHeight: '250px' }} aria-label='react-navigation-button'>
                            React.js is the front-end aspect of the MERN stack, click here to view the React.js Page.
                        </Button>
                        <Button variant='outlined' style={{ maxWidth: '500px', minHeight: '250px' }} aria-label='express-navigation-button'>
                            Express.js is the back-end aspect of the MERN stack, it also works with Node and MongoDB to provide the front-end with the data it needs, click here to view the Express.js Page.
                        </Button>
                    </Stack>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className='NavigationButtons'>
                    <Stack direction='row' spacing={15}>
                        <Button variant='outlined' style={{ maxWidth: '500px', minHeight: '250px' }} aria-label='mongo-navigation-button'>
                            MongoDB is a non SQL based database program which uses JSON like documents, click here to view the MongoDB Page.
                        </Button>
                        <Button variant='outlined' style={{ maxWidth: '500px', minHeight: '250px' }} aria-label='node-navigation-button'>
                            Node.js is the back-end JavaScript runtime environment which helps run various JS frameworks and executes JS code outside a web browser, click here to view the Node.js Page.
                        </Button>
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default HomePage;