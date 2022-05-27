import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../utils/consts';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../..';
import cn from "classnames";
import './Navbar.scss';

const Navbar: React.FC = () => {
    const { auth } = useContext(Context);
    const [ user ] = useAuthState(auth);
    const [navbarMenu, setNavbarMenu] = useState<boolean>(false);

    return (
        <div className="navbar">
            {user && (
                <div className={cn("navbar__profile", navbarMenu ? "active" : "")}>
                    <div className="navbar__profile-avatar" onClick={() => setNavbarMenu(!navbarMenu)}>
                        <img src={user.photoURL} alt="profile avatar" />
                    </div>
                    <div>
                        <div className="navbar__profile-username">{user.displayName}</div>
                        <div className="navbar__profile-email">{user.email}</div>
                    </div>
                    <div className="navbar__profile-menu">
                        <div className="navbar__profile-createAt">
                            <span>Сreated at:</span>
                            {user.metadata.creationTime}
                        </div>
                    </div>
                </div>
            )}
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
