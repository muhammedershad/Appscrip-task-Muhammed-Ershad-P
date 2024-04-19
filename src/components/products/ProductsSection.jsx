"use client";
import React, { useState } from "react";
import Style from "./style.css";
import { MdAutoAwesome, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import ProductCard from "../ui/ProductCard";
import FilterAccordion from "../ui/filterAccordion";

const ProductsSection = () => {
    const [showFilter, setShowFilter] = useState(false); // Initially set to false
    const [products, setProducts] = useState()
    useState(() => {
        (async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            console.log(data)
            setProducts(data)
        })();
    },[]);

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
                        <MdKeyboardArrowLeft />
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
                     style={{ width: showFilter ? '80%' : '100%' }}>
               
                    <div className="product-section">
                    {products?.map((product, index) => (
                        <ProductCard key={index} title={product.title} imageSrc={product.image} description={product.description} />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsSection;
