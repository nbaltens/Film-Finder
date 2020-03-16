import React from 'react';

const MovieBtn = (props) => {
    return(
        <div className="movieBtnContainer">
            <button className="popularBtn" onClick={props.popularMovies}>Popular</button>
            <button className="newReleaseBtn">New Release</button>
            <button className="nowPlayingBtn" onClick={props.inTheaters}>In Theaters</button>
        </div>
    )
}

export default MovieBtn;