import React from "react";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";
import Index from "../../pages/Index";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Index/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )

}