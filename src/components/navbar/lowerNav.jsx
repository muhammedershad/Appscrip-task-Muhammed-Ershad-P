"use client";
import React, { useEffect, useState } from "react";
import Styles from "./style.css";
import Link from "next/link";
import { FaBars, FaReact, FaSearch, FaHeart, FaShoppingBag, FaUser } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

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
                        <FaBars />
                    </div>
                    <FaReact />
                </span>
                <h2 className="logo">LOGO</h2>
                <div className="small-icons">
                    <FaSearch />
                    <FaHeart />
                    <FaShoppingBag />
                    <span>
                        <FaUser />
                        <select id="language">
                            <option value="english">ENG</option>
                            <option value="malay">MAL</option>
                        </select>
                    </span>
                </div>
            </div>
            <div className="innerNav-bottom">
                <ul>
                    {navbarHeadings.map((menu) => (
                        <li key={menu.title}>
                            <Link href={menu.link}>{menu.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {
                sidebarOpen && (
                    <div className="sideBar">
                        <div
                            className="close-icon"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <IoClose />
                        </div>
                        <ul>
                            {navbarHeadings.map((menu) => (
                                <li key={menu.title}>
                                    <Link href={menu.link}>{menu.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </div>
    );
};

export default LowerNav;
