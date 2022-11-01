import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Dashboard(props) {
    console.log(props);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [notif, setNotif] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            price,
            stock,
        };
        Inertia.post("/products", data);
        setNotif(true);
        setName("");
        setStock("");
        setPrice("");
    };

    useEffect(() => {
        if (!props.showAllProducts) {
            Inertia.get("/products");
        }
        console.log("props", props);
        return;
    }, []);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <div className="m-3 text-sm breadcrumbs">
                            <ul>
                                <li>Products</li>
                                <li>Add</li>
                            </ul>
                        </div>
                        {notif && (
                            <div className="alert alert-success shadow-lg">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="stroke-current flex-shrink-0 h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>{props.flash.message}</span>
                                </div>
                            </div>
                        )}
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Product Name"
                            className="m-2 input input-bordered input-sm w-full"
                        />
                        <input
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            type="text"
                            placeholder="Price"
                            className="m-2 input input-bordered input-sm w-full"
                        />
                        <input
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            type="text"
                            placeholder="Stock"
                            className="m-2 input input-bordered input-sm w-full"
                        />
                        <button
                            onClick={handleSubmit}
                            className="m-2 btn btn-primary"
                        >
                            Add Product
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                {props.showAllProducts && props.showAllProducts.length ? (
                    props.showAllProducts.map((product, i) => {
                        return (
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
                                    <h2 className="card-title">
                                        {product.name}
                                    </h2>
                                    <p>
                                        {product.price} | Stock ({product.stock}{" "}
                                        pcs )
                                    </p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-inline">
                                            <Link
                                                href={route("edit.products")}
                                                data={{ id: product.id }}
                                                method="get"
                                                as="button"
                                            >
                                                Edit
                                            </Link>
                                        </div>
                                        <div className="badge badge-outline">
                                            <Link
                                                href={route("delete.products")}
                                                data={{ id: product.id }}
                                                method="post"
                                                as="button"
                                            >
                                                Delete
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>No Product Found</p>
                )}
            </div>
        </AuthenticatedLayout>
    );
}
