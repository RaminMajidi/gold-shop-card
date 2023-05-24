import React from "react";
import { Row } from "react-bootstrap";
import CollectionItem from "./CollectionItem";

const Collections = () =>{

    return (
        <article className="">
        <h2 className="text-center my-5 p-3 fs-1 "><i className="bi bi-bag-heart-fill mx-2 "></i><span className="border-bottom pb-2">Gold collection</span></h2>
        <Row className="rounded-4 bg-warning my-5 g-3 p-2 pt-0 justify-content-center ">
            <CollectionItem id={1} imgUrl="images/h-p.c1.jpg" title="Gold Service" pageUrl="/shop"/>
            <CollectionItem id={2} imgUrl="images/h-p.c2.jpg" title="Gold Service" pageUrl="/shop"/>
            <CollectionItem id={3} imgUrl="images/h-p.c3.jpg" title="Gold Service" pageUrl="/shop"/>
        </Row>
        </article>
    )
}

export default Collections;