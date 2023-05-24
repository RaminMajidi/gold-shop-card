import React from "react";
import { Row } from "react-bootstrap";
import CategoreItem from "./CategoreItem";


const Categores: React.FC = () => {

    return (
        <article className="my-3">
            <h2 className="text-center p-3 fs-1 my-5"><i className="bi bi-gem mx-2 "></i><span className="border-bottom pb-2">product categories</span></h2>
            <Row className="g-2 justify-content-around" >
              <CategoreItem id={1} imgUrl={"images/h-p-1.jpg"} title="Gold bracelet" pageUrl="/shop"/>
              <CategoreItem id={2} imgUrl={"images/h-p-2.jpg"} title="Half a set of gold" pageUrl="/shop"/>
              <CategoreItem id={3} imgUrl={"images/h-p-3.jpg"} title="Golden ring" pageUrl="/shop"/>
              <CategoreItem id={4} imgUrl={"images/h-p-4.jpg"} title="Gold necklaces" pageUrl="/shop"/>
              <CategoreItem id={5} imgUrl={"images/h-p-5.jpg"} title="Gold Service" pageUrl="/shop"/>
              <CategoreItem id={6} imgUrl={"images/h-p-6.jpg"} title="Gold wedding ring" pageUrl="/shop"/>
              <CategoreItem id={7} imgUrl={"images/h-p-7.jpg"} title="Golden ring" pageUrl="/shop"/>
              <CategoreItem id={8} imgUrl={"images/h-p-8.jpg"} title="Gold Chains" pageUrl="/shop"/>
            </Row>
        </article>
    )
}


export default Categores;