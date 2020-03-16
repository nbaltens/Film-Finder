import React from 'react';

const Nav = (props) => {
    return (
        <nav class="black">
            <div class="nav-wrapper container">
                <a onClick={props.clearWhenClick} href="#" className="brand-logo logo">FILM FINDER</a>  
                <div className="navBtn">
                <button class="popularBtn btn right amber lighten-1" onClick={props.popularMovies}>Popular</button>
                <button class="nowPlayingBtn btn right amber lighten-1" onClick={props.inTheaters}>In Theaters</button>  
                </div> 
                
            </div>
        </nav>
    )
}

export default Nav;