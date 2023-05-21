import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export type CategoreItemProps = {
    id: number,
    imgUrl: String,
    pageUrl: string,
    title: string
}

const CategoreItem: React.FC<CategoreItemProps> = ({ id, imgUrl, pageUrl, title }) => {


    return (
        <div className="home-categ-item col-5 col-md-4 col-lg-3 rounded-3 ">
            <Link style={{textDecoration:"none"}} to={pageUrl} className="d-flex text-white flex-column justify-content-center align-items-center">
                <div className="w-100">
                    <Image className="rounded-3" width={"100%"} src={`${imgUrl}`} />
                </div>
                <h6 className="mt-2">{title}</h6>
            </Link>
        </div>
    )
}
export default CategoreItem