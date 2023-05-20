import { Card, Button } from "react-bootstrap"
import { useCartContext } from "../context/CartContext"
import { ProductModel } from "../pages/Shop"


function Product({ id, title, price, category, imgUrl }: ProductModel) {
    const { addItem, getItemQty, decreaseItem, removeItem } = useCartContext()
    const qty = getItemQty(id)

    return (
        <Card className="h-100 p-card" data-category={category} >
            <div className="p-card-img-cont">
                <Card.Img className="p-card-img" variant="top" src={imgUrl} width={"100%"} style={{ objectFit: "fill" }} />
            </div>
            <Card.Body className="d-flex flex-column bg-dark ">
                <Card.Title className="d-flex flex-column mb-1">
                    <span className="fs-6 text-light">{title}</span>
                    <span className="mt-2 text-light"><span className="text-success">$</span><span className="text-success">{price}</span></span>
                </Card.Title>
                <div className="mt-auto">
                    {qty === 0 ? (
                        <Button onClick={() => addItem(id)} className="btn-secondary w-100 mt-2">Add To Cart</Button>
                    ) : (
                        <div className="d-flex align-items-center flex-column " style={{ gap: ".5rem" }}>
                            <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                                <Button onClick={() => addItem(id)} className="btn-secondary">+</Button>
                                <span className="fs-5 m-3">{qty}</span>
                                <Button onClick={() => decreaseItem(id)} className="btn-secondary">-</Button>
                            </div>
                            <Button onClick={() => removeItem(id)} className="btn-danger w-50" size="sm">remove</Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}

export default Product