"use client";

import {displayContent} from "next/dist/client/dev/fouc";
import Menu from "./Menu";


export default function Header() {
  return <header>
    <div className="menu-icon" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          fontSize: "24px",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "block",
        }}
      >☰
      </button>

    <nav>
      <a href="#" onClick={() => {
        alert("You clicked on the home button");
      }}>Home</a>
      <a href="#">About</a>
      <a href="#">Products</a>
      <a href="#">Contact Us</a>
    </nav>
    <div className="cart-icon">🛒</div>
  </div>
  </header>

}