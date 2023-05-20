import React from "react"
import Baner from "../components/Baner"
import { Container } from "react-bootstrap"
import Services from "../components/Services"

function Home(){
    return(
        <Container>
        <Baner imgUrl={"images/Baner.jpg"}/>
         <Services/>
        </Container>
    )
}

export default Home