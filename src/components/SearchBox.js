import React from 'react';

const SearchBox = (props) => {
    return (
        <div className="container" style={{ paddingTop: 30, paddingBottom: 30 }}>
            <div className="row">
                <section className="test col s4 offset-s4">
                    <form onSubmit={props.handleSubmit} action="">
                        <div class="input-field">
                            <input className="searchBar" placeholder="Search Movie" onChange={props.handleChange} type="text" />                            
                        </div>  
                    </form>
                    
                </section>                
            </div>
        </div>
        
    )
}

export default SearchBox;