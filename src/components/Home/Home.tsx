import Baner from "../Baner"
import { Container } from "react-bootstrap"
import Services from "../Services"
import Categores from "../Categores"
import Collections from "../Collections"


function Home() {
    return (
        <>
            <Container>
                <Baner imgUrl={"images/Baner.jpg"} />
                <Services />
                <Categores />
                <Collections />
            </Container >
        </>
    )
}

export default Home