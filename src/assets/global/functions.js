import Avatar from "../images/AvatarIcons.svg";
import Data from "../images/feed/data.svg";
import Dolar from "../images/feed/dolar.svg";
import Flag from "../images/feed/flag.svg";
import Mark from "../images/feed/mark.svg";
import Marked from "../images/feed/marked.svg";
import Medal from "../images/feed/medal.svg";
import Success from "../images/feed/success.svg";
import YellowBag from "../images/feed/yelowbag.svg";
import {differenceInDays, formatDistance, subDays} from "date-fns";

// ****  function to sort users by the amount of points  *****

export const sort = (a, b) => a.balance.points < b.balance.points ? (1) : -1
export const sortFeed = (a, b) => a.date < b.date ? (1) : -1

// ****  function to put default Avatar image on users without avatar *****

export const imgNull = (user) => user === null || user === undefined ? Avatar : user

// **** function to select and open user overview ***

export function openOverview(id , selectorId, selectorId2, setUserId) {
    const leaderCell = document.getElementsByClassName("leaderContainer")

    for (const divKey in leaderCell) {
        if (leaderCell[divKey].id === id) {
            leaderCell[divKey].classList.add("marked")
            setUserId(leaderCell[divKey].id)
        }else if (divKey !== 'length'){
            leaderCell[divKey].className="leaderContainer"
        }
    }
}

export function dateP(dateEvent) {
    const startDate = new Date(dateEvent);
    const endDate = new Date();
    const daysBetween = differenceInDays(endDate, startDate);
    return formatDistance(subDays(new Date(), daysBetween), new Date(), {addSuffix: true})
}

export function feedImg(feed) {

    switch (feed) {
        case feed.includes("Completed the module Nibh quis massa."):
            console.log('deu certo')
            return <img src={Flag} alt='icon'/>

        case "Redeemed New Roots Backpack for 80 points":
            return <img src={YellowBag} alt='icon'/>

        case "Completed the module Nibh quis massa.":
            return <img src={Mark} alt='icon'/>

        case "Received 100 points for completing the Incentive Imperdiet senecctus sit.":
            return <img src={Marked} alt='icon'/>

        case "Redeemed New Roots Backpack for 100 points":
            return <img src={YellowBag} alt='icon'/>

        case "Completed the Incetive Imperdiet senectus sit.":
            return <img src={Flag} alt='icon'/>
        case "Redeemed New Roots Backpack for 600 points":
            return <img src={YellowBag} alt='icon'/>

        default:


    }

}

