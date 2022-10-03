import React, {useContext} from "react";
import {DivCard, DivCardLeaderbords, DivCardTitle,} from "./LeaderbordCardStyle";
import LeaderboardCell from "../leaderboardCell/LeaderboardCell";
import {imgNull, sort} from "../../assets/global/functions";
import {UsersContext} from "../../context/UsersContext";
import Loading from "../../assets/images/Spinner-1.2s-231px.svg"

export default function LeaderboardCard() {
    const {users} = useContext(UsersContext)

    return (
        <DivCard>
            <DivCardTitle>
                <p>Pos.</p>
                <p>Member</p>
                <p>Points</p>
            </DivCardTitle>
            <DivCardLeaderbords id='cardleader'>

                {/**** method to create leaderboard cells in an ordered ranking *****/}

                {
                    users.length === 0 ? (
                        <span style={{display:"flex"}}>
                        <img src={Loading} alt="loading" style={{width:"50px"}}/>
                        </span>
                    ): (
                    users.sort(sort).map((user,key)=>(
                        <LeaderboardCell
                            id={user.id}
                            key={user.id}
                            name={user.name}
                            position={(key +1)}
                            image={imgNull(user.image)}
                            points={user.balance.points}
                        />)))
                }
            </DivCardLeaderbords>
        </DivCard>
    )
}
