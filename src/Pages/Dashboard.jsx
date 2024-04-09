import React, { useState } from "react";
import Background from "../Molecules/Background/Background";
import SearchIcon from '../Assets/search.png';
import Anime from "../DummyData/anime";
import Tags from  '../Assets/tags.png';


const Dashboard=({username, setPageNumber})=>
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
            item.title.toLowerCase().includes(search.toLowerCase())
        );
       return setAnimeList(filterBySearch);
    }
    
    const handleAdd=()=>
    {
        setPageNumber(2);
    }


    return(<Background variant={'dashboard'}>
        <div className="nav-bar">
            <div className="username">{username}</div>
            <div className="search-box">
                <input type="text" className="search-input"
                 placeholder="Search Anything" 
                 onChange={(event)=>{setSearch(event.target.value)}} />
                <img src={SearchIcon} alt="search-icon" className="search-icon" 
                onClick={handleSearch}/>
            </div>
                <div className="nav-bar-item">Home</div>
                <div className="nav-bar-item" onClick={handleAdd}>Add Blog</div>
                <div className="nav-bar-item">Profile</div>
                <div className="nav-bar-item">Contact us</div>
        </div>
        <img src={Tags} alt="tags" className="tags" />
       
      
        {
            search===""? 
               <div className="anime-objects">
                     {(Anime.map((item)=>
                {
                    return(
                        <div className="anime-list">
                            <img src={item.icon} alt="attac" className="anime-icon"></img>
                             <div className="anime-info">
                                 <div className="anime-title">{item.title}</div>
                                <div className="anime-content">{item.content}</div>
                             </div>
                        </div>
                   
                    )
                }))}
               </div>:
                animeList.length >0? (animeList.map((item)=>
                {
                    return(
                        <div className="anime-list">
                            <img src={item.icon} alt="attac" className="anime-icon"></img>
                             <div className="anime-info">
                                <div className="anime-title">{item.title}</div>
                                <div className="anime-content">{item.content}</div>
                             </div>
                        </div>
                    )
                })) :
                <div>We Don't Have That Anime.</div>
            }
           

    </Background>)

}

export default Dashboard;