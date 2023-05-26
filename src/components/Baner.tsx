import React from "react";
import { Image } from "react-bootstrap";

type BanerProps = {
    imgUrl:string
}


const Baner:React.FC<BanerProps> = ({imgUrl}) =>{

    return(
        <Image loading="lazy" style={{borderRadius:".8rem"}} width={"100%"}  src={imgUrl}></Image>
    )
}

export default Baner