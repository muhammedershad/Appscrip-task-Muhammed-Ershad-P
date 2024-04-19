"use state";
import React, { useState } from "react";

const FilterAccordion = ({ title, options }) => {
    const [openAccordion, setOpenAccordion] = useState(false);
    return (
        <div className="filterAccordion">
            <div
                onClick={() => setOpenAccordion((prev) => !prev)}
                className="accordionHeaderSection"
            >
                <h3>{title}</h3>
                <h3>
                    {openAccordion ? (
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.72003 10.73L7.0667 6.38489C7.58003 5.87174 8.42003 5.87174 8.93336 6.38489L13.28 10.73"
                                stroke="#292D32"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    ) : (
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.72125 6.00017L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018"
                                stroke="#292D32"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    )}
                </h3>
            </div>
            <h4>All</h4>
            {openAccordion && (
                <>
                    <p>Unselect all</p>
                    {/* Render options with checkboxes */}
                    {options?.map((option) => (
                        <div className="checkbox-container" key={option.value}>
                            <input type="checkbox" id={option.value} />
                            <label htmlFor={option.value}>{option}</label>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default FilterAccordion;
