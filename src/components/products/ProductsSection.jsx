"use client";
import React, { useState } from "react";
import Style from "./style.css";
import ProductCard from "../ui/ProductCard";
import FilterAccordion from "../ui/filterAccordion";
import Spinner from "../ui/Spinner";

const ProductsSection = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [products, setProducts] = useState();
    useState(() => {
        (async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
        })();
    }, []);

    // Toggle the state when the button is clicked
    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    const filters = [
        { title: "IDEAL FOR", options: ["Men", "Women", "Baby & Kids"] },
        { title: "OCCASION", options: ["Casual", "Formal", "Party"] },
        { title: "WORK", options: ["Office", "Outdoor", "Indoor"] },
        { title: "FABRIC", options: ["Cotton", "Polyester", "Wool"] },
        { title: "SEGMENT", options: ["High-End", "Mid-Range", "Budget"] },
        { title: "SUITABLE FOR", options: ["Summer", "Winter", "All Seasons"] },
        { title: "SIZE", options: ["Small", "Medium", "Large"] },
        { title: "COLOR", options: ["Red", "Blue", "Green"] },
    ];

    return (
        <div className="outerDiv">
            <div className="header-section">
                <div className="header-inner-div">
                    <p>3425 Items</p>
                    <p className="hide-filter-text" onClick={toggleFilter}>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.99986 2.72125L5.65319 7.06792C5.13986 7.58125 5.13986 8.42125 5.65319 8.93458L9.99986 13.2812"
                                stroke="#292D32"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        {showFilter ? "Hide Filter" : "Show Filter"}
                    </p>
                </div>
                <p>RECOMMENDED</p>
            </div>
            <div className="container">
                <div className={`left-section ${showFilter ? "show" : ""}`}>
                    {showFilter && (
                        <div className="filter-section">
                            <div className="checkbox-container">
                                <input type="checkbox" id="checkbox" />
                                <label for="checkbox">Customizble</label>
                            </div>
                            {filters.map((filter) => (
                                <FilterAccordion
                                    key={filter.title}
                                    title={filter.title}
                                    options={filter.options}
                                />
                            ))}
                        </div>
                    )}
                </div>
                <div
                    className={`right-section ${
                        showFilter ? "show-filter" : ""
                    }`}
                    style={{ width: showFilter ? "80%" : "100%" }}
                >
                    {
                        products ? (<div className="product-section">
                        {products?.map((product, index) => (
                            <ProductCard
                                key={index}
                                title={product.title}
                                imageSrc={product.image}
                                description={product.description}
                            />
                        ))}
                    </div>) : (<Spinner />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductsSection;
