import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";


type CollectionItemProps = {
    id: number,
    imgUrl: string,
    title: string,
    pageUrl: string
}

const CollectionItem: React.FC<CollectionItemProps> = ({ id, imgUrl, pageUrl, title }) => {


    return (
        <div className="col-12 col-md-4 position-relative h-100">
            <div className="collection-img rounded-3 w-100 h-100 overflow-hidden">
            <Image  className=" w-100 rounded-3" src={`${imgUrl}`} />
            </div>
            <div className="position-absolute bottom-0 px-5 py-4 text-black fw-bold ">
            <div className="fs-4 bg-secondary p-1 opacity-75 rounded-3">
                <span >{title}</span>
                <i className="bi bi-chevron-left"></i>
            </div>
            <div className="mt-2">
                <Link to={pageUrl} className="fs-5 bg-warning px-3 py-1   text-decoration-none rounded-2 text-dark">
                    <span>view</span>
                    <i className="bi bi-arrow-right"></i>
                </Link>
            </div>

            </div>
           
        </div>
    )
}

export default CollectionItem;