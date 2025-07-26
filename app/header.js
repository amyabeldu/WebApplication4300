"use client";

import {displayContent} from "next/dist/client/dev/fouc";
import Menu from "./Menu";

function onHamburgerClick() {

}

export default function Header() {
  return <header>
    <div className="menu-icon"></div>
    <nav>
      <a href="#" onClick={() => {
        alert("You clicked on the home button");
      }}>Home</a>
      <a href="#">About</a>
      <a href="#">Products</a>
      <a href="#">Contact Us</a>
    </nav>
    <div className="cart-icon">🛒</div>

  </header>

}