import React from "react";
import ErrorImg from "../../assets/images/ups-erro-404.jpg"

export default function PageNotFound() {
    return (
        <>
            <div>
                <h1>Page is not found - 404</h1>
                <img src={ErrorImg} alt="Page is not found - 404"/>
            </div>
        </>
    )
}