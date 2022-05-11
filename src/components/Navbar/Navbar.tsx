import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../utils/consts';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Navbar.scss';
import { Context } from '../..';

const Navbar: React.FC = () => {
    const { auth } = useContext(Context);
    const [ user ] = useAuthState(auth);
    
    return (
        <div className="navbar">
            {user ?
                <button onClick={() => auth.signOut()} className="navbar__btn">Log-out</button>
                :
                <Link to={ROUTE.LOGIN}>
                    <button className="navbar__btn">Log-in</button>
                </Link>
            }
        </div>
    );
}

export default Navbar;
