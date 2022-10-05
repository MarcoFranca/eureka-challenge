import React, {useContext, useEffect} from "react";
import {UsersContext} from "../../context/UsersContext";

import {getFielo, getUserProfile} from "../../services/api/apiFielo";
import {fielo} from "../../services/api/apiConfig";


import {CardContainer, DivHeader, DivMemberDisplay, DivTierTitle} from "./UserProfileStyle";
import {imgNull, nextTier} from "../../assets/global/functions";

// **********  images ***************

import Arrow from "../../assets/images/arrow.svg";
import Infinite from "../../assets/images/infinite.svg";
import Iimg from "../../assets/images/pngwing.com.png";

export default function UserProfile() {

// ********   constants used   ********

    const {
        token, userId, userProfile,
        setUserProfile, userPrograms,
        setUserPrograms, userLevel, setUserLevel,progId,
        setProgId, levelId,setLevelId,levelMark, setLevelMark
    } = useContext(UsersContext)

//**********  functions to capture user profile, programs and user level  **************

    useEffect(()=>{
        userId.length > 0 && getUserProfile(token,fielo.urlUser(userId),setUserProfile, setProgId, setLevelId)
    },[userId, token, setUserProfile, setProgId, setLevelId])

    useEffect(()=>{
        progId.length > 0 && getFielo(token,fielo.urlProgramsId(progId),setUserPrograms)
    },[progId, token, setUserPrograms])

    useEffect(()=>{
        levelId.length > 0 && getFielo(token,fielo.urlLevels(levelId),setUserLevel)
    },[levelId, token, setUserLevel])

    useEffect(()=>{
        levelId.length > 0 && nextTier(userLevel, setLevelMark)
    },[userLevel, setLevelMark])



    return (
        userLevel.length === 0  ?
            "" :
            <CardContainer id={"overviewCard"}>

{/*************************** first division *****************************/}

                <DivHeader>
                    <img src={imgNull(userProfile.image)} alt="Avatar"/>
                    <h2>{userProfile.name}</h2>
                    <details>
                        <summary>{userPrograms.name}<img src={Arrow} alt="Arrow"/></summary>
                    </details>
                </DivHeader>

{/*************************** second division *****************************/}

                <DivMemberDisplay>

                    <div>
                        <div className="userStatus">
                            <img src={Infinite} alt="logo"/><h3>{userProfile.balance.points}</h3>
                        </div>
                        <p>points</p>
                    </div>

                    <div>
                        <h3>{userProfile.balance.miles}</h3>
                        <p>miles</p>
                    </div>

                    <div>
                        <h3><span>$</span>{Math.round(userProfile.balance.currency)}</h3>
                        <p>Currency</p>
                    </div>

                </DivMemberDisplay>

 {/*************************** third division *****************************/}

                <DivTierTitle>
                    <div className="tierContent">
                        <h3>{userLevel.name}</h3>
                        <div className="nextTier">
                            <p><span>Next tier</span>{levelMark}</p>
                            <img src={Iimg} alt="i"/>
                        </div>
                    </div>

 {/*************************** tier marks *****************************/}

                    <div className="fillContainer">
                        <div id="tier1" className="tierMark"></div>
                        <div id="tier2" className="tierMark"></div>
                        <div id="tier3" className="tierMark"></div>
                        <div id="tier4" className="tierMark"></div>
                    </div>
                </DivTierTitle>
            </CardContainer>
    )}


