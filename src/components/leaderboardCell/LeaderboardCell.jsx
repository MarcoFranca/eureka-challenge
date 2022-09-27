import React, {useContext} from "react";
import {ButtonLeaderboard} from "./LeaderboardCellStyle";
import {openOverview} from "../../assets/global/functions";
import {UsersContext} from "../../context/UsersContext";

//user cell to be created inside the leaderboard card

export default function LeaderboardCell(props) {
    const {setUserId} = useContext(UsersContext)

    return (
        <ButtonLeaderboard onClick={()=> {
            openOverview(
                props.id,
                "overviewCard",
                setUserId)}}
        >
            <div id={props.id} className="leaderContainer">
                <p>{props.position}</p>
                <div><img src={props.image} alt={props.alt}/>{props.name}</div>
                <p>{props.points}</p>
            </div>
        </ButtonLeaderboard>
    )
}
