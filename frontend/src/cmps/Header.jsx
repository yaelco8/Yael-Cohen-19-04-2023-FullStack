import React from "react"
import {Link,useLocation} from 'react-router-dom'

export const Header = ()=>{
    const location = useLocation();

    return <section className="Header">
<nav className='Header__nav'>
    <Link to="/" className={location.pathname==='/'?"Header__nav__link__on":"Header__nav__link"}>Home page</Link>
    <Link to="/favorites" className={location.pathname==='/favorites'?"Header__nav__link__on":"Header__nav__link"}>Favorites</Link>
</nav>
    </section>
}