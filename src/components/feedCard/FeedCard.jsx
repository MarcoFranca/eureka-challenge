import React, {useContext, useEffect} from "react";
import {UsersContext} from "../../context/UsersContext";
import ActivityFeed from "../activityFeed/ActivityFeed";
import {getFielo} from "../../services/api/apiFielo";
import {fielo} from "../../services/api/apiConfig";
import {CardFeedContainer} from "./FeedCardStyle";

export default function FeedCard() {
    const {token, userId, userLevel, setUserFeed} = useContext(UsersContext)

//************   function to capture user activities   ********************

    useEffect(()=>{
        userId.length > 0 && getFielo(token, fielo.urlUserActivities(userId),setUserFeed)
    },[userId])

    return (
        <>
            {userLevel.length === 0 ?
                ("") :
                <CardFeedContainer id={"feedCard"}>
                    <ActivityFeed/>
                </CardFeedContainer>
            }
        </>
    )}