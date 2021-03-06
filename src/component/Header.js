import { useState } from 'react';

import Navigation from './Navigation';
import UserMenu from './UserMenu';
import Extension from './Extension';
import './Header.css'

function Header() {
    const [showId,setShowId] = useState();

    const onMouseOver = event=> {
        const {showId} = event.target.dataset;

        if (showId === undefined) {
            return;
        }
        
        setShowId(showId);
    }

    const hideExtension = ()=> {
        setShowId(null);
    }

    return (
        <header className='header'>
            <nav className='container' onMouseOver={onMouseOver}>
                <a href='/'>
                    <span className='logo'>wanted</span>
                </a>
                <Navigation />
                <UserMenu />
            </nav>

            <Extension 
                showId = {showId}
                hide = {hideExtension}
            />
        </header>
    )
}

export default Header;