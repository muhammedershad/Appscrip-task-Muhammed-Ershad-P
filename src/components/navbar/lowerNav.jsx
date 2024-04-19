"use client";
import React, { useEffect, useState } from "react";
import Styles from "./style.css";
import { GrReactjs } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { PiHeartThin } from "react-icons/pi";
import { PiHandbagSimpleThin } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { navbarHeadings } from "@/constants/constants";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const LowerNav = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="outerNav">
            <div className="innerNav-top">
                <span className="big-icon">
                    <div
                        onClick={() => setSidebarOpen((prev) => !prev)}
                        className="menu-icon"
                    >
                        <IoMenu />
                    </div>
                    <GrReactjs />
                </span>
                <h2 className="logo">LOGO</h2>
                <div className="small-icons">
                    <CiSearch />
                    <PiHeartThin />
                    <PiHandbagSimpleThin />
                    <span>
                        <IoPersonOutline />
                        <select id="cars">
                            <option value="volvo">ENG</option>
                            <option value="saab">MAL</option>
                        </select>
                    </span>
                </div>
            </div>
            <div className="innerNav-bottom">
                <ul>
                    {navbarHeadings.map((menu) => (
                        <li Link={menu.link} key={menu.title}>
                            {menu.title}
                        </li>
                    ))}
                </ul>
            </div>
            {
                sidebarOpen && (<div className="sideBar">
                <div
                    className="close-icon"
                    onClick={() => setSidebarOpen(false)}
                >
                    <IoClose />
                </div>
                <ul>
                    {navbarHeadings.map((menu) => (
                        <li Link={menu.link} key={menu.title}>
                            {menu.title}
                        </li>
                    ))}
                </ul>
            </div>)
            }
        </div>
    );
};

export default LowerNav;
