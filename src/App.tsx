import React, { useContext } from 'react';
import Loader from './components/Loader/Loader';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar/Navbar';
import { HashRouter } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '.';
import './App.scss';

const App: React.FC = () => {
    const { auth } = useContext(Context);
    const [ user, loading, error ] = useAuthState(auth);
    
    if (loading) {
        return <Loader />
    }

    return (
        <div className="app">
            <HashRouter>
                <Navbar />
                <AppRouter />
            </HashRouter>
        </div>
    );
}

export default App;
