import Avatar from "../images/ORF8060.jpg";

// ****  function to sort users by the amount of points  *****

export const sort = (a, b) => a.balance.points < b.balance.points ? (1) : -1

// ****  function to put default Avatar image on users without avatar *****

export const imgNull = (user) => user === null ? Avatar : user

// **** function to select and open user overview ***

export function openOverview(id , selector, setUserSelect) {
    const tag = document.querySelector(`#${selector}`)
    const leaderCell = document.getElementsByClassName("leaderContainer")
    tag.style.display !== "flex" && (tag.style.display = 'flex')

    for (const divKey in leaderCell) {
        if (leaderCell[divKey].id === id) {
            leaderCell[divKey].classList.add("marked")
            setUserSelect(leaderCell[divKey].id)
        }else if (divKey !== 'length'){
            leaderCell[divKey].className="leaderContainer"
        }
    }
}

