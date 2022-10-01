import React from "react";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import {UsersContextProvider} from "../../context/UsersContext";

export default function Home() {
    return (
        <>
            <Header/>
            <UsersContextProvider>
                <Main/>
            </UsersContextProvider>
        </>
    )
}