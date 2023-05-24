import React from "react"
import Baner from "../components/Baner"
import { Container } from "react-bootstrap"
import Services from "../components/Services"
import Categores from "../components/Categores"
import Collections from "../components/Collections"

function Home() {
    return (
        <Container>
            <Baner imgUrl={"images/Baner.jpg"} />
            <Services />
            <Categores/>
            <Collections/>
        </Container>
    )
}

export default Home