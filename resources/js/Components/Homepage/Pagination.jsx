import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Pagination = ({ meta }) => {
    const prev = meta.links[0].url;
    const current = meta.current_page;
    const next = meta.links[meta.links.length - 1].url;

    return (
        <div className="btn-group m-4">
            {prev && (
                <Link href={prev} className="btn">
                    «
                </Link>
            )}
            <button className="btn btn-active">Page {current}</button>

            {next && (
                <Link href={next} className="btn">
                    »
                </Link>
            )}
        </div>
    );
};

export default Pagination;
