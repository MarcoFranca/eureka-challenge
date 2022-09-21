import React from "react";
import {ButtonLeaderboard} from "./LeaderboardCellStyle";

export default function LeaderboardCell(props) {

    return (
        <ButtonLeaderboard>

            <p>{props.position}</p>
            <div><img src={props.image} alt={props.alt}/>{props.name}</div>
            <p>{props.points}</p>

        </ButtonLeaderboard>
    )
}