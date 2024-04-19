"use state";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const FilterAccordion = ({ title, options }) => {
    const [openAccordion, setOpenAccordion] = useState(false);
    return (
        <div className="filterAccordion">
            <div
                onClick={() => setOpenAccordion((prev) => !prev)}
                className="accordionHeaderSection"
            >
                <h3>{title}</h3>
                <h3>{openAccordion ? <IoIosArrowUp /> : <IoIosArrowDown />}</h3>
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
