import React from "react";

type ServesItemProps = {
    icon:string,
    title:string,
    text:string
}

const ServiceItem:React.FC<ServesItemProps> = ({icon,title,text}) =>{

    return(
        <div className="d-flex flex-column align-items-center bg-light rounded-2 text-black  col-5 col-lg-2 m-1" >
            <i className={`bi ${icon} text-warning fs-1`}></i>
            <h6 className="fw-bold text-center">{title}</h6>
            <p className="d-none d-md-block text-center">{text}</p>
        </div>
    )
}

export default ServiceItem