// *************  API keys and URLs    ***************

export const fielo = {

//*************  Fielo access API  *************

    url: "https://challenge-fielo.herokuapp.com",
    Key: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCh7uxHjWd1CyRgPD4XHcIPKiDb",

//*************  Fielo methods  *************

//******* Endpoint responsible for returning all users.  *************
    urlUsers: "/users",
//******* Endpoint responsible for returning the user profile. ********
    urlUser: (userId)=> `/users/${userId}`,
//******* Endpoint responsible for returning user activities.  ********
    urlUserActivities: (userId)=> `/users/${userId}/activities`,
//******* Endpoint responsible for returning all programs. *********
    urlProgramsId : (programsId)=> `/programs/${programsId}`,
//******* Endpoint responsible for returning all programs. *********
    urlProgramsLevels : (levelsId)=> `/programs/${levelsId}/levels`,
//******* Endpoint responsible for returning all programs. *********
    urlLevels : (userId)=> `/levels/${userId}`
}

//Bing API
export const bingUrl = 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR'

