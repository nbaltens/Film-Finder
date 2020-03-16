import React from 'react';

const MovieInfo = (props) => {      
    return (
        <div>
            <div className="container movieDesc">
                <div className="row" onClick={props.closeMovieInfo} style={{cursor: "pointer", paddingTop: 50}}>
                    <i class="fas fa-arrow-left"></i>
                    <span style={{marginLeft: 10}}>Back</span>
                </div>
                <div className="row">
                    <div className="col s12 m4">
                        { props.currentMovie.poster_path == null ? <img className="movieImg" src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="Card image cap" /> 
                        : <img className="movieImg" src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="Card image" />}
                        
                    </div>
                    <div className="col s12 m8">
                        <div className="info-container">
                            <p className="movieTitle">{props.currentMovie.title}</p>
                            <p className="movieDate">Release Date: {props.currentMovie.release_date.substring(6).split("-").concat(props.currentMovie.release_date.substring(0, 4)).join("/")}</p>
                            <p>Rating: {Math.floor(props.currentMovie.vote_average)}/10</p>
                            <p className="movieInfo">{props.currentMovie.overview}</p>                            
                        </div>
                    </div>            
                </div>
            </div>
        </div>
    )
}

export default MovieInfo;