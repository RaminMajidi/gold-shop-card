import React from "react";
import ServiceItem from "./ServiceItem";
import { Row } from "react-bootstrap";


const Services:React.FC = ()=>{

    return(
        <article className="my-3">
            <h2 className="text-center p-3 fs-1 my-3"><i className="bi bi-patch-check-fill mx-2"></i><span className="border-bottom pb-2">our services</span></h2>
            <Row  className="g-2 justify-content-around" >
                <ServiceItem icon="bi-truck" title="Fast delivery" text="In the shortest time possible"/>
                <ServiceItem icon="bi-headset" title="Full support" text="24 hours, 7 days a week"/>
                <ServiceItem icon="bi-credit-card" title="Price guarantee" text="The best market price"/>
                <ServiceItem icon="bi-patch-check-fill" title="Authenticity of goods" text="One of the top brands"/>
            </Row>
        </article>
    )
}

export default Services