import React, {useEffect} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"
import { useMovie } from "../customHooks/movieContext"
import { useType } from "../customHooks/typeContext"
import axios from 'axios'
const MovieList = () => {
    
    const {movieList , setMovieList} = useMovie()
    const {movietype} = useParams()
    const {setType} = useType()
    useEffect(()=>{
        setType(movietype)  
    },[movietype])

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [movietype])

    const getData = async () => {
        const data = await axios(`https://api.themoviedb.org/3/movie/${movietype ? movietype : "popular"}?api_key=90656c5137fef589fb5f3b3951570cbd&language=en-US`)
        console.log(data.results)
        fetch(`https://api.themoviedb.org/3/movie/${movietype ? movietype : "popular"}?api_key=90656c5137fef589fb5f3b3951570cbd&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
        
    }

    return (
        <div className="movie__list">
            <div style={{height : "100px"}}  ></div>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList