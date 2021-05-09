import React from 'react'
import s from './DetailPage.module.css'

class MovieDetail extends React.Component {

    state= {

        MovieDetail: [],
        image:'',
        summary:'',
        name: ''
    }
    componentDidMount() {
        this.fetchMovieDetails();
        
    }

    fetchMovieDetails = async () => {
        const id = this.props.match.params.id
        const response = await fetch(`http://api.tvmaze.com/shows/${id}`)
        const data = await response.json();


        this.setState({MovieDetail: data})
        const image = this.state.MovieDetail.image?.original
        this.setState({image: image})
        const summar = this.state.MovieDetail.summary
        this.setState({summary: summar})
        const name = this.state.MovieDetail.name
        this.setState({name: name})
        
    }

    

    render() {
        console.log(this.state.MovieDetail)
        const {name, summary, image} = this.state
        return (
            <div className={s.detailWrapper}>
                <div className={s.detailCard}>
                   <img className={s.image} width='380px' height='600px' src={image == null ? 'https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg' : image }/>
                   <div className={s.cardText}>
                        <h1 className={s.title}>{name}</h1>
                        <p className={s.text}>{summary.replace(/<.*?>/gm, "")}</p>
                   </div>
                
                </div>
            </div>
            
        )
    }
}

export default MovieDetail