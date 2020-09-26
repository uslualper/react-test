import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getMoviesQuery = gql`{
    movies{
        id,
        title,
        description
    }
  }`;

class MovieList extends Component{
    state = {};

    render() {
        console.log(this.props);
        return(
            <div>
                <ul className="movie-list">
                    <li>Lorem Ipsum</li>
                </ul>
            </div>
        );

    };
    
}

export default graphql(getMoviesQuery)(MovieList);