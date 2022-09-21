import React, {useEffect} from "react";
import {getBackground} from "../../services/api/bingApi";
import {MainStyle} from "./MainStyle";
import CardLeaderboard from "../cardLeaderborad/CardLeaderboard";



export default function Main() {

    useEffect(()=>
        getBackground()
    )
    return (
        <MainStyle>
            <CardLeaderboard/>
        </MainStyle>
    )
}