import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";

export default function EditProducts(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    const handleUpdate = (e) => {
        e.preventDefault();
        const data = {
            id: props.myProducts.id,
            name,
            price,
            stock,
        };
        Inertia.post("/products/update", data);
        setName("");
        setStock("");
        setPrice("");
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <div className="m-3 text-sm breadcrumbs">
                            <ul>
                                <li>
                                    <Link href={route("show.products")}>
                                        Products
                                    </Link>
                                </li>
                                <li>Edit</li>
                            </ul>
                        </div>
                        <input
                            defaultValue={props.myProducts.name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Product Name"
                            className="m-2 input input-bordered input-sm w-full"
                        />
                        <input
                            defaultValue={props.myProducts.price}
                            onChange={(e) => setPrice(e.target.value)}
                            type="text"
                            placeholder="Price"
                            className="m-2 input input-bordered input-sm w-full"
                        />
                        <input
                            defaultValue={props.myProducts.stock}
                            onChange={(e) => setStock(e.target.value)}
                            type="text"
                            placeholder="Stock"
                            className="m-2 input input-bordered input-sm w-full"
                        />
                        <button
                            onClick={handleUpdate}
                            className="m-2 btn btn-primary"
                        >
                            Update Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
