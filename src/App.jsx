import { createRef } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { Box, Button } from '@mui/material';

// import PageNotFound from './components/ControlPages/PageNotFound';
// import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NavBar from './components/Navbar/NavBar';

function App() {
    const notistackRef = createRef()

    /**
     * Dismisses a snackbar notification by key (ID) when the close button is clicked
     * @param {ID} key 
     */
    const onClickDismiss = key => () => {
        notistackRef.current.closeSnackbar(key)
    }

    return (
        <SnackbarProvider
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            ref={notistackRef}
            action={(key) => (
                <Button className="snackbar-handle-close" onClick={onClickDismiss(key)}>
                    X
                </Button>
            )}
        >
            <Router>
                <Box sx={{ backgroundColor: "E6E6E6", display: "flex", width:"100%", height: "100%", position: "absolute"  }}>
                    <NavBar />

                    <Routes>
                        {/*HOME*/}
                        <Route exact path="/" element={ <Navigate to="/home" /> } />
                        <Route exact path="/home" element={ <Home /> } />
                        <Route exact path="/liveobservation" element={ <>aaa</> } />

                        {/*only appears when no route matches*/}
                        {/* <Route path='*' element={<PageNotFound />} /> */}
                    </Routes>
                </Box>
            </Router>
        </SnackbarProvider>
    )
}

export default App
