import React from "react";
import style from "./style.css";
import Image from "next/image";

const ProductCard = ({ imageSrc, title, description }) => {
    return (
        <div className={"productCard"}>
            <div className={"productImage"}>
                <Image src={imageSrc} alt={title} width={250} height={300} />
            </div>
            <div
                style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    width: "280px",
                }}
                className={"productDetails"}
            >
                <h2 className={"productTitle"}>{title}</h2>
                <p
                    style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "280px",
                        color:' #888792'
                    }}
                    className={"productDescription"}
                >
                    <span style={{}}>Sign in</span> or Create an account to see pricing
                </p>
            </div>

            <div className={"productActions"}>
                {/* <i className={`fas fa-heart ${"heartIcon"}`}></i>{" "} */}
                {/* Heart icon */}
            </div>
        </div>
    );
};

export default ProductCard;
