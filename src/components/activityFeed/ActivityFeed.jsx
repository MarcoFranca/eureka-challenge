import React, {useContext} from "react";
import {UsersContext} from "../../context/UsersContext";
import {activityFeedRender, sortFeed} from "../../assets/global/functions";
import Loading from "../../assets/images/Spinner-1.2s-231px.svg";

export default function ActivityFeed() {
    const {userFeed} = useContext(UsersContext)

    return (
            <>
                <h2>Activity Feed</h2>

                <p>Show Filters</p>

 {/**********  function to build the activities on the card  ************/}

                {userFeed.length === 0 ? (<span>
                        <img src={Loading} alt="loading" style={{width:"50px"}}/>
                        </span>):

 // function to format the date of the api that changed the format on 10/02/2022
 //                 and put in ascending order by the dates

                    (userFeed.map((feed) =>{
                             feed.date = feed.date.replace("--", "-" )
                        return feed
                })).sort(sortFeed).map((feed)=>(
                    <div key={feed.id} className='feedCountainer'>
                        {activityFeedRender(feed)}
                    </div>
                    ))

                }

            </>
    )
}

