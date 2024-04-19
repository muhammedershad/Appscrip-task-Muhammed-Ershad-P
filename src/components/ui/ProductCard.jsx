import React from "react";
import style from "./style.css";
import Image from "next/image";

const ProductCard = ({ imageSrc, title, description }) => {
    return (
        <div className={"productCard"}>
            <div className={"productImage"}>
                <Image
                    src={
                        imageSrc
                    }
                    alt={title}
                    width={300}
                    height={300}
                />
            </div>
            <div className={"productDetails"}>
                <h2 className={"productTitle"}>{title}</h2>
                <p className={"productDescription"}>{description}</p>
            </div>
            <div className={"productActions"}>
                <i className={`fas fa-heart ${"heartIcon"}`}></i>{" "}
                {/* Heart icon */}
            </div>
        </div>
    );
};

export default ProductCard;
