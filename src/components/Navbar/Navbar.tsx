import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../utils/consts';
import './Navbar.scss';

const Navbar: React.FC = () => {
    const user: boolean = false;
    
    return (
        <div className="navbar">
            {user ?
                <button className="navbar__btn">Log-out</button>
                :
                <Link to={ROUTE.LOGIN}>
                    <button className="navbar__btn">Log-in</button>
                </Link>
            }
        </div>
    );
}

export default Navbar;
