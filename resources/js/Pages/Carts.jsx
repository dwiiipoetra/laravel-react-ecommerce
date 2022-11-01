import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Carts(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Carts
                </h2>
            }
        >
            <Head title="Carts" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <div className="m-3 text-sm breadcrumbs">
                            <ul>
                                <li>Carts</li>
                                <li>List</li>
                            </ul>
                        </div>
                        {props.showCarts.length > 0 ? (
                            <div className="overflow-x-auto w-full">
                                <table className="table w-full">
                                    <thead>
                                        <tr>
                                            <th>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        className="checkbox"
                                                    />
                                                </label>
                                            </th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Subtotal</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.showCarts.map((cart, i) => (
                                            <tr>
                                                <th>
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            className="checkbox"
                                                        />
                                                    </label>
                                                </th>
                                                <td>
                                                    <div className="flex items-center space-x-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <img src="https://placeimg.com/160/160/arch" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">
                                                                {
                                                                    cart.product
                                                                        .name
                                                                }
                                                            </div>
                                                            {/* <div className="text-sm opacity-50">
                                                            United States
                                                        </div> */}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{cart.product.price}</td>
                                                <td>
                                                    <div className="form-control">
                                                        <label className="input-group input-group-sm">
                                                            <span>-</span>
                                                            <div className="my-1 input input-sm">
                                                                {
                                                                    cart.product_qty
                                                                }
                                                            </div>
                                                            <span>+</span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    {cart.product.price *
                                                        cart.product_qty}
                                                </td>
                                                <th>
                                                    <button className="btn btn-sm btn-outline btn-error">
                                                        Remove
                                                    </button>
                                                </th>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th></th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Subtotal</th>
                                            <th></th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        ) : (
                            <div className="w-full text-center my-5">
                                <p className="text-2xl">
                                    <strong>Your Shopping Cart is Empty</strong>
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4"></div>
        </AuthenticatedLayout>
    );
}
