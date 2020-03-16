import React from 'react';

const Movie = (props) => {
    let formatDate = props.date.split("-").reverse().join("/");

    return (
        <div className="col s12 m6 l3 moviePoster" onClick={() => props.viewMovieInfo(props.movieId)}>
            <div class="card">
                <div class="card-image waves-effect waves-block">
                    { props.image == null ? <img className="movieImg" src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="Movie Image" /> : 
                    <img className="movieImg" src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="Card image cap" />}
                </div>
                           
            </div>
        </div>
    )
}

export default Movie;