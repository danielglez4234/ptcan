import { createRef } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Button from '@mui/material/Button';

// import PageNotFound from './components/ControlPages/PageNotFound';
// import Header from './components/Header/Header';
import Home from './components/Home/Home';

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
                <Routes>
                    {/*blank path redirects to -> /WebReport*/}
                    <Route exact path="/" element={<Navigate to="/" />} />
                    {/*HOME*/}
                    <div className="container">
                    <NavBar />
                        <Route exact path="/" element={ <Home /> } />

                    </div>
                    {/*only appears when no route matches*/}
                    {/* <Route path='*' element={<PageNotFound />} /> */}
                </Routes>
            </Router>
        </SnackbarProvider>
    )
}

export default App
