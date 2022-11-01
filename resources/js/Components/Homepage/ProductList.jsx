import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const foundProducts = (products) => {
    return products.map((product, i) => {
        const [qty, setQty] = useState(1);
        const [notif, setNotif] = useState(false);

        const handleDec = () => {
            if (qty > 1) {
                setQty((prevCount) => prevCount - 1);
            }
        };

        const handleInc = () => {
            if (qty < 30) {
                setQty((prevCount) => prevCount + 1);
            }
        };

        const addToCart = (e) => {
            e.preventDefault();
            const data = {
                product_id: product.id,
                product_qty: qty,
            };
            Inertia.post("/add-to-carts", data);
            setNotif(true);
        };

        return (
            <>
                <div
                    key={i}
                    className="card card-compact w-full lg:w-96 bg-base-100 shadow-xl"
                >
                    <figure>
                        <img
                            src="https://placeimg.com/400/225/arch"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{product.name}</h2>
                        <p>
                            {product.price} | Stock ({product.stock} pcs)
                        </p>
                        <div className="card-actions justify-center">
                            <div className="form-control">
                                <label className="input-group input-group-sm">
                                    <span onClick={handleDec}>-</span>
                                    <div className="my-1 input input-sm">
                                        {qty}
                                    </div>
                                    <span onClick={handleInc}>+</span>
                                </label>
                                <button
                                    className="my-1 btn  btn-sm btn-primary"
                                    onClick={addToCart}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    });
};
const emptyProducts = () => {
    return <div>No Products Found</div>;
};
const ProductList = ({ products }) => {
    if (!products || products === "undefined") {
        return emptyProducts();
    }
    return foundProducts(products);
};

export default ProductList;
