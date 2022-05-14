import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../utils/consts';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Navbar.scss';
import { Context } from '../..';

const Navbar: React.FC = () => {
    const { auth } = useContext(Context);
    const [ user ] = useAuthState(auth);
    
    console.log(user);

    return (
        <div className="navbar">
            <div className="navbar__profile">
                <div className="navbar__profile-avatar">
                    <img src={user.photoURL} alt="profile avatar" />
                </div>
                <div>
                    <div className="navbar__profile-username">{user.displayName}</div>
                    <div className="navbar__profile-email">{user.email}</div>
                </div>
            </div>
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
