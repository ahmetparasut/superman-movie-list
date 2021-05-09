import React from 'react';
import s from './HomePage.module.css'



class MovieCards extends React.Component {
    state = {
        supermanItem: [],
        image:''
        
    }

    componentDidMount() {
        this.fetchDetails();
        
    }

    fetchDetails = async () => {
        const response = await fetch('http://api.tvmaze.com/search/shows?q=superman');
        const data = await response.json();
        console.log(data);
        this.setState({supermanItem: data})
        
    }
    
    

    render() {
        const {image} = this.state
        return(
            <div className={s.movieWrapper}>
                <div className={s.movieGrid}>
              
                 {
                   this.state.supermanItem.map(movie => <MovieCard key={movie.show.id} movie={movie} />)
                 }
              
                </div>
            </div>
            

        )
        
    }
}

const MovieCard = ({movie}) => {

    return (
        <div className={s.movieCards}>
            <img src={movie.show.image ? movie.show.image.original : 'https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg'} width='367px' height='500px'/>
            <h4 className={s.title}>{movie.show.name}</h4>
            <a className={s.detailLink} href={`/detail/${movie.show.id}`}>Detail</a>
        </div>
    )
}

export default MovieCards