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
import { navComponents } from './constants/navComponents';
import ObservationResults from './components/ObservationResults/ObservationResults';

const getComponent = (title) => {
    switch (title) {
        case "Home":
            return <Home />
        case "Observation Status":
            return () => <div>Observation Status</div>
        case "Observation Results":
            return <ObservationResults />
        case "Live Observation":
            return () => <div>Live Observation</div>
        case "Pending Observations":
            return () => <div>Pending Observations</div>
        case "Observation Configuration":
            return () => <div>Observation Configuration</div>
        case "Work In Progress":
            return () => <div>Work In Progress</div>
        default:
            return () => <div>404</div>
    }
}


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
                        {
                            navComponents.map((item, index) => {
                                return (
                                    <Route 
                                        key={index} 
                                        path={`/${item.title.toLowerCase().replace(/\s+/g, '')}`} 
                                        element={ getComponent(item.title) } 
                                    />
                                )
                            })
                        }
                    </Routes>
                </Box>
            </Router>
        </SnackbarProvider>
    )
}

export default App
