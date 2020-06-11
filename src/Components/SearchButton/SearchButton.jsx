import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Style from "./SearchButton.module.css";

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
        <form onSubmit={handleSubmit} className={Style.search}>
            <div className="row">
                <input
                    className={Style.input}
                    onChange={handleChange}
                    type="text"
                    placeholder="Product to Search by ID"
                />
                <button type="submit" className={Style.button}>
                    <FontAwesomeIcon icon={faSearch} color="white" size="2x" />
                </button>
            </div>
        </form>
    );
}
