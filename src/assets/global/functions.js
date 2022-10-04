import Avatar from "../images/AvatarIcons.svg";
import Flag from "../images/feed/flag.svg";
import Mark from "../images/feed/mark.svg";
import Marked from "../images/feed/marked.svg";
import YellowBag from "../images/feed/yelowbag.svg";
import {differenceInDays, format, formatDistance, subDays} from "date-fns";
import React from "react";

// ****  function to sort users by the amount of points  *****

export const sort = (a, b) => a.balance.points < b.balance.points ? (1) : -1
export const sortFeed = (a, b) => a.date < b.date ? (1) : -1

// ****  function to put default Avatar image on users without avatar *****

export const imgNull = (user) => user === null || user === undefined ? Avatar : user

// **** function to select and open user overview ***

export function openUserProfile(id, setUserId) {
    const leaderCell = document.getElementsByClassName("leaderContainer")

    for (const divKey in leaderCell) {
        if (leaderCell[divKey].id === id) {
            setUserId(leaderCell[divKey].id)
            leaderCell[divKey].classList.add("marked")
        }else if (divKey !== 'length'){
            leaderCell[divKey].className="leaderContainer"
        }
    }
}

// **** function to put how many days have passed since the activity ***

export function dateP(dateEvent) {
    const startDate = new Date(dateEvent)
    let date = format(new Date(), 'yyyy-MM-dd')
    const endDate = new Date(date);
    let daysBetween = differenceInDays(endDate, startDate);
    return formatDistance(subDays(new Date(), (daysBetween)), new Date(), {addSuffix: true})
}


// **** function to place the images of the activities ***

export function activityFeedRender(feed) {

    switch (feed.description) {

        case "Redeemed New Roots Backpack for 80 points":
            return (
                <>
                    <img src={YellowBag} alt='icon'/>
                    <div className="feedContent">
                        <h3>{dateP(feed.date)}</h3>
                        <p>Redeemed <span>New Roots Backpack</span> for <span>80 points.</span></p>
                    </div>
                </>
            )

        case "Completed the module Nibh quis massa.":
            return (
                <>
                    <img src={Mark} alt='icon'/>
                    <div className="feedContent">
                        <h3>{dateP(feed.date)}</h3>
                        <p>Completed the module <span>Nibh quis massa.</span></p>
                    </div>
                </>
            )

        case "Received 100 points for completing the Incentive Imperdiet senecctus sit.":
            return(
                <>
                <img src={Marked} alt='icon'/>
                <div className="feedContent">
                    <h3>{dateP(feed.date)}</h3>
                    <p>Received <span>100 points</span> for completing the Incentive <span>Imperdiet senecctus sit.</span></p>
                </div>
            </>
            )

        case "Redeemed New Roots Backpack for 100 points":
            return(
                <>
                    <img src={YellowBag} alt='icon'/>
                    <div className="feedContent">
                        <h3>{dateP(feed.date)}</h3>
                        <p>Completed the Incetive <span>Imperdiet senectus sit.</span></p>
                    </div>
                </>
            )

        case "Completed the Incetive Imperdiet senectus sit.":
            return (
                <>
                    <img src={Flag} alt='icon'/>
                    <div className="feedContent">
                        <h3>{dateP(feed.date)}</h3>
                        <p>Completed the Incetive <span>Imperdiet senectus sit.</span></p>
                    </div>
                </>
            )

        case "Redeemed New Roots Backpack for 600 points":
            return (
                <>
                    <img src={YellowBag} alt='icon'/>
                    <div className="feedContent">
                        <h3>{dateP(feed.date)}</h3>
                        <p>Redeemed <span>New Roots Backpack</span> for <span>600 points.</span></p>
                    </div>
                </>
            )

        default:
            console.error("the feed action description was not registered, or an error occurred")
    }

}

// function to select the benchmark and write the next level

export function nextTier(tier, setLevelMark) {

    switch (tier.name) {

        case "Gold":
            const tierSelected = document.getElementById("tier3")
            unCheck("tierMark")
            if (tierSelected !== null){
                tierSelected.classList.add("tierMarked")
            }
            return setLevelMark("Platinium")


        case "Silver":
            const tierSelected2 = document.getElementById("tier2")
            unCheck("tierMark")
            if (tierSelected2 !== null){
                tierSelected2.classList.add("tierMarked")
            }
            return setLevelMark("Gold")


        case "Bronze":
            const tierSelected3 = document.getElementById("tier1")
            unCheck("tierMark")
            if (tierSelected3 !== null){
                tierSelected3.classList.add("tierMarked")
            }
            return setLevelMark("Silver")

        default:
            return console.error('error' + tier.name)
    }
}

// function to unCheck mark

export function unCheck(className) {
    const tiers = document.getElementsByClassName(className)
    for (const Key in tiers) {
        if (Key !== 'length'){
            tiers[Key].className = className
        }}
}