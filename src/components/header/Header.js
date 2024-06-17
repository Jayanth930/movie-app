import React, {useRef} from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { useMovie } from "../customHooks/movieContext";
import { useType } from "../customHooks/typeContext";

const Header = () => {
    const {setMovieList} = useMovie()
    const movieRef = useRef()
    const {type} = useType()

    async function handleChange(){
        const list = await getMovieData()
        console.log(type,list)
        const moviename = movieRef.current.value.toLowerCase()
        if(!list) return 
        if(moviename === ""){
            setMovieList(list)
        }else{
            const filterlist = list.filter((movie)=> movie.original_title.toLowerCase().includes(moviename))
            setMovieList(filterlist)
        }
    }
    const getMovieData = ()=>{
        return fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=90656c5137fef589fb5f3b3951570cbd&language=en-US`)
        .then(res => res.json())
        .then(data => data.results)
    }

    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/home"><img className="header__icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0DBopsVTqQt3QwoKF5-t9Oqjh7Jo9bANykXhbpRcYew&s" alt="logo" /></Link>
                <NavLink className="nav-links"  to="/movies/popular"  style={({ isActive }) => ({color: isActive && "red"})}>Popular</NavLink>
                <NavLink className="nav-links"  to="/movies/top_rated"  style={({ isActive }) => ({color: isActive && "red"})}>Top Rated</NavLink>
                <NavLink className="nav-links"  to="/movies/upcoming"  style={({ isActive }) => ({color: isActive && "red"})}>Upcoming</NavLink>
            </div>
            <div className="headerRight">
                <input type="text" ref={movieRef} onChange={handleChange} placeholder="Search..." />
                {/*<div className="wrapper">
                    <a href="#" className="nav">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </a>
                </div>*/}
                
            <nav role="navigation" class="primary-navigation">
            <ul>
                <li><a href="#"><div className="wrapper">
                    <a href="#" className="nav">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </a>
                </div></a>
                <ul class="dropdown">
                    <li><a href="https://www.linkedin.com/in/kambhampati-hemanth/" target="_blank" rel="noopener noreferrer">Profile</a></li>
                    <li><a href="#">Contact Me</a></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
                </li>
            </ul>
            </nav>
            </div>
        </div>
    );
};

export default Header;
