import React, { useEffect, useState } from "react"
import Loading from "../components/Loading/Loading"


function Home() {
    const HomeLazyComponent = React.lazy(() => import("../components/Home/Home"))
    return (
        <React.Suspense fallback={<Loading/>}>
            <HomeLazyComponent />
        </React.Suspense>
    )
}

export default Home