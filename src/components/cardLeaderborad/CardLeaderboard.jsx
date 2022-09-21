import React, {useEffect, useState} from "react";
import {DivCard, DivCardLeaderbords, DivCardTitle,} from "./CardLeaderbordStyle";
import {getApi} from "../../services/api/apiFielo";
import {apiUsers} from "../../services/api/apiConfig";
import LeaderboardCell from "../leaderboardCell/LeaderboardCell";
import Avatar from "../../assets/images/ORF8060.jpg"

export default function CardLeaderboard() {

// *** Hook to call a function that captures API users ***

    const [users, setUser] = useState([])

    useEffect(() => {
        getApi(apiUsers, setUser)
    }, [])

    return (
        <DivCard>
            <DivCardTitle>
                <p>Pos.</p>
                <p>Member</p>
                <p>Points</p>
            </DivCardTitle>
            <DivCardLeaderbords>

 {/**** method to create leaderboard cells in an ordered ranking *****/}

                {!users? (<span>is Loading...</span>): (
                    users.sort(sort).map((user,key)=>(
                        <LeaderboardCell
                            key={user.id}
                            name={user.name}
                            position={(key +1)}
                            image={imgNull(user.image)}
                            points={user.balance.points}
                        />)))}
            </DivCardLeaderbords>
        </DivCard>
    )
}

// ****  function to sort users by the amount of points  *****

const sort = (a,b) => a.balance.points < b.balance.points ? (1) : -1

// ****  function to put default Avatar image on users without avatar *****

const imgNull = (user) => user === null ? Avatar : user