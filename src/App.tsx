import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '.';
import './App.scss';
import Loader from './components/Loader/Loader';

const App: React.FC = () => {
    const { auth } = useContext(Context);
    const [ user, loading, error ] = useAuthState(auth);
    
    if (loading) {
        return <Loader />
    }

    return (
        <div className="app">
            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </div>
    );
}

export default App;
