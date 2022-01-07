import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <div className='nav'>
            <div className='nav-logo'>
                <Link to ='/'>Crypo App</Link>
                <Link to ='/home'>Home</Link>
                <Link to ='/currencies'>Crypo Currencies</Link>
                <Link to ='/exchanges'>Exchanges</Link>
            </div>
        </div>
    );
};

export default Nav;