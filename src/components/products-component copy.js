
import { useState } from "react"

// const products = [
//     {
//         "id": 4,
//         "title": "Handmade Fresh Table",
//         "price": 687,
//         "description": "Andy shoes are designed to keeping in...",
//         "category": {
//             "id": 5,
//             "name": "Others",
//             "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
//         },
//         "images": [
//             "https://placeimg.com/640/480/any?r=0.9178516507833767",
//             "https://placeimg.com/640/480/any?r=0.9300320592588625",
//             "https://placeimg.com/640/480/any?r=0.8807778235430017"
//         ]
//     },
//     {
//         "id": 5,
//         "title": "Handmade Fresh Table",
//         "price": 687,
//         "description": "Andy shoes are designed to keeping in...",
//         "category": {
//             "id": 5,
//             "name": "Others",
//             "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
//         },
//         "images": [
//             "https://placeimg.com/640/480/any?r=0.9178516507833767",
//             "https://placeimg.com/640/480/any?r=0.9300320592588625",
//             "https://placeimg.com/640/480/any?r=0.8807778235430017"
//         ]
//     }

// ]

const ProductsComponent = () => {
    const [show, setShow] = useState(false);
    return <>
        <>
            {
                products.map((product) => (
                    <div>
                        <h1>
                            {
                                product.title
                            }
                        </h1>
                    </div>
                ))
            }
            <button className="bg-slate-400 p-5" onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}>
                show Me
            </button>
            {show === true && <section className="bg-red-600 h-36">
                some content
            </section>}
        </>
    </>
}

export default ProductsComponent;