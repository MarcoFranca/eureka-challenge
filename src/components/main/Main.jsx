import React, {useEffect, useState} from "react";
import {MainStyle} from "./MainStyle";

// ***********  Componentes  *******************

import LeaderboardCard from "../leaderboardCard/LeaderboardCard";
import UserProfile from "../userProfile/UserProfile";
import FeedCard from "../feedCard/FeedCard";

// ***********  API  *******************

import {getBackground} from "../../services/api/bingApi";
import {getFielo, tokenGenerator} from "../../services/api/apiFielo";
import {fielo} from "../../services/api/apiConfig";

// ***********  Context  *******************

import {useContext} from "react";
import {UsersContext} from "../../context/UsersContext";


// *********** Main page responsible for calling the start functions of the *******************
// *********** apis and build leaderboard, user Profile and feed cards *******************

export default function Main() {
    const {token, setToken, setUsers} = useContext(UsersContext)
    const [urlImg, setUrlimg] = useState()
    const [urlTitleImg, setTitleImg] = useState()


// ********* Function calls responsible for creating the faithful Fielo API token *******************
// ********* and the Bing API background image *******************

    useEffect(()=>{
        tokenGenerator(setToken)
        getBackground(setUrlimg,setTitleImg)
    },[])

// *********** Function responsible for capturing API users *******************

    useEffect(()=>{
        token.length > 0 && getFielo(token,fielo.urlUsers,setUsers)
    },[token, setUsers])

    return (
        <MainStyle>
            <img className={'background'} src={urlImg} alt={urlTitleImg}/>

            <LeaderboardCard/>

            <UserProfile/>

            <FeedCard/>

        </MainStyle>
    )
}

