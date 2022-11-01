import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import ProductList from "@/Components/Homepage/ProductList";
import Pagination from "@/Components/Homepage/Pagination";

export default function Homepage(props) {
    console.log(props);
    return (
        <>
            <div className="min-h-screen bg-slate-50">
                <Head title={props.title} />
                <Navbar user={props.auth.user} />
                <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                    <ProductList products={props.products.data} />
                </div>
                <div className="flex justify-center items-center">
                    <Pagination meta={props.products.meta} />
                </div>
            </div>
        </>
    );
}
