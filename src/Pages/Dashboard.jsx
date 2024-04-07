import React, { useState } from "react";
import Background from "../Molecules/Background/Background";
import SearchIcon from '../Assets/search.png';
import Anime from "../DummyData/anime";


const Dashboard=()=>
{

    const[animeList, setAnimeList]=useState([]);
    const[search, setSearch]=useState("");

    const handleSearch=()=>
    {
        if(search==="")
        {
            setAnimeList(Anime);
        }
        const filterBySearch = Anime.filter((item)=> 
            item.genre.toLowerCase().includes(search.toLowerCase())
        );
       return setAnimeList(filterBySearch);
    }


    return(<Background variant={'dashboard'}>
        <div className="nav-bar">
            <div className="username">profile</div>
            <div className="search-box">
                <input type="text" className="search-input"
                 placeholder="Search Anything" 
                 onChange={(event)=>{setSearch(event.target.value)}} />
                <img src={SearchIcon} alt="search-icon" className="search-icon" 
                onClick={handleSearch}/>
            </div>
        </div>
        {
            search===""? 
                (Anime.map((item)=>
                {
                    return(
                        <div className="anime-list">
                             <div className="anime-title">{item.title}</div>
                             <div className="anime-content">{item.content}</div>
                        </div>
                   
                    )
                })):
                animeList.length >0? (animeList.map((item)=>
                {
                    return(
                        <div className="anime-list">
                             <div className="anime-title">{item.title}</div>
                             <div className="anime-content">{item.content}</div>
                        </div>
                    )
                })) :
                <div>We Don't Have That Anime.</div>
            }


    </Background>)

}

export default Dashboard;