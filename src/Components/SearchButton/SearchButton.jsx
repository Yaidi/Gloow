import React from "react";
import { useHistory } from "react-router-dom";

export default function SearchForm() {
    const history = useHistory();
    let input = "";

    const handleChange = (e) => {
        input = e.target.value;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/ProductsList/${input}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    Product to Search by ID
                    <input
                        className="input"
                        onChange={handleChange}
                        type="text"
                    />
                </div>
                <div className="control">
                    <i>
                        <button
                            type="submit"
                            className="fal fa-search"
                        ></button>
                    </i>
                </div>
            </div>
        </form>
    );
}
