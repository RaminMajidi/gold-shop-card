import ProductItems from "../data/products.json"
import { useCartContext } from "../context/CartContext"
import { Stack ,Button } from "react-bootstrap"


type CartItemProps ={
    id:number
    qty: number
}

function CartItem ({id,qty}:CartItemProps){

 const {removeItem,addItem,decreaseItem} = useCartContext()
 const product  = ProductItems.find((item) => item.id === id) 
 
 if(product === null || product === undefined){
    return null 
 } else{
    return (
        <Stack dir="horizontal" gap={2} className="d-flex align-items-center ">
            <img src={product.imgUrl} style={{width:"170px",height:"110px",objectFit:"fill"}}/>
            <div className="m-auto text-dark ">
              {product.title}{" "}
              {qty > 1 && (
                <span className="text-muted" style={{fontSize:".65rem"}}>item : {qty}</span>
              )}
            </div>
            <div className="text-muted">Total Price : ${product.price * qty}</div>
            <div className="d-flex justify-content-between" >
            <Button title="Low-off" className="mx-1" variant="secondary" size="sm" onClick={()=> decreaseItem(product.id)} >&#10134;</Button>
            <Button title="َAdd" className="mx-1" variant="secondary" size="sm" onClick={()=> addItem(product.id)} >&#10010;</Button>
            <Button title="Delete" className="mx-1" variant="danger" size="sm" onClick={()=> removeItem(product.id)} >&#10006;</Button>
            </div>
        </Stack>
     )
 }
}

export default CartItem