import React from "react";
import Styles from "./style.css";
import { GrReactjs } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { PiHeartThin } from "react-icons/pi";
import { PiHandbagSimpleThin } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const LowerNav = () => {
    return (
        <div className="outerNav">
            <div className="innerNav-top">
                <span className="big-icon">
                    <GrReactjs />
                </span>
                <h2 className="logo">LOGO</h2>
                <div className="small-icons">
                    <CiSearch />
                    <PiHeartThin />
                    <PiHandbagSimpleThin />
                    <IoPersonOutline />
                    <select id="cars">
                        <option value="volvo">ENG</option>
                        <option value="saab">MAL</option>
                    </select>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default LowerNav;
