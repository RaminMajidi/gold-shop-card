import React from "react"
import Baner from "../components/Baner"
import { Container } from "react-bootstrap"
import Services from "../components/Services"
import Categores from "../components/Categores"

function Home() {
    return (
        <Container>
            <Baner imgUrl={"images/Baner.jpg"} />
            <Services />
            <Categores/>
        </Container>
    )
}

export default Home