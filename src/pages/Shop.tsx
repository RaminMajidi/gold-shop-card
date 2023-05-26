import React, { useEffect, useState } from "react"
import Loading from "../components/Loading/Loading"


function Shop() {
    const ShopLazyComponent = React.lazy(() => import("../components/Shop/Shop"))
    return (
        <React.Suspense fallback={<Loading/>}>
            <ShopLazyComponent />
        </React.Suspense>
    )
}

export default Shop