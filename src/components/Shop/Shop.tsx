import { Row, Col, Button } from "react-bootstrap"
import Product from "../Product"
import productItems from "../../data/products.json"
import { useEffect, useState } from "react"
import { ProductModel } from "../../Models/ProductModel"


function Shop() {
    const [data, setData] = useState<ProductModel[]>(productItems);
    const [prducts, setProducts] = useState<ProductModel[]>([]);
    const [categorys, setCategores] = useState<string[]>([]);
    const [filter, setFilter] = useState<string>("All");

    async function filterHandeler(filter: string) {
        if (filter === "All") {
            setProducts(data)
            setFilter("All")
        } else {
            let dataFilter = await data.filter(item => item.category == filter)
            setProducts(dataFilter)
            setFilter(filter)
        }
    }

    useEffect(() => {
        setProducts(data)
        async function categorysHandeler() {
            const category = await data.map(item => { return item.category })
            setCategores([...new Set(category)])
        }
        categorysHandeler();
    }, [data])

    return (
        <>
            <Row className="d-flex justify-content-center w-100 my-3 mx-auto">
                {
                    categorys.length > 0 &&
                    <>
                        <Button onClick={() => filterHandeler('All')} key={"all"} className={`mx-1 ${filter === "All" ? "bg-danger" : "bg-secondary"}`} style={{ width: "max-content" }}>All</Button>
                        {
                            categorys.map((item, i) => (
                                <Button onClick={() => filterHandeler(item)} key={i} className={`mx-1  ${filter === item ? "bg-danger" : "bg-secondary"}`} style={{ width: "max-content" }}>{item}</Button>
                            ))
                        }
                    </>
                }
            </Row>
            <Row xs={2} md={3} lg={4} className="g-3 mb-5">
                {
                    prducts.length ? (
                        prducts.map((item, index) => (
                            <Col key={item.id}>
                                <Product key={index} {...item} />
                            </Col>
                        ))
                    ) : (
                        <h1 className="w-100 text-center">Items Not Found... </h1>
                    )
                }
            </Row>
        </>
    )
}

export default Shop