import {createContext, useState} from "react";

export const UsersContext = createContext('')

export const UsersContextProvider = ({children})=>{
    const [token, setToken] = useState([])

    const [userId,setUserId] = useState([])
    const [progId,setProgId] = useState([])
    const [levelId,setLevelId] = useState([])

    const [users,setUsers] = useState([])
    const [userSelected, setUserSelected] = useState([])
    const [userProfile, setUserProfile] = useState([])
    const [userPrograms, setUserPrograms] = useState([])
    const [userLevel, setUserLevel] = useState([])
    const [levelMark, setLevelMark] = useState([])
    const [userFeed, setUserFeed] = useState([])


    return(
        <UsersContext.Provider value={
            {
                token, setToken,
                users, setUsers,
                userId, setUserId,
                userSelected, setUserSelected,
                userProfile, setUserProfile,
                userPrograms, setUserPrograms,
                userLevel, setUserLevel,
                progId,setProgId,
                levelId,setLevelId,
                userFeed, setUserFeed,
                levelMark, setLevelMark
                }}
        >
            {children}
        </UsersContext.Provider>
    )

}