import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss'
const Nav = () => {

    return (
        <div className='nav'>
            <div className='nav-logo'>
                <Link to ='/' className='nav-link'>Home</Link>
                <Link to ='/currencies' className='nav-link'>Crypo Currencies</Link>
                <Link to ='/exchanges' className='nav-link'>Exchanges</Link>
            </div>
        </div>
    );
};

export default Nav;