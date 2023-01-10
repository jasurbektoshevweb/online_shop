import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { IoMenuSharp } from "react-icons/io5";
function NavLinks() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="navLink">
      <div className="nav-container">
        <ul>
          <li>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              
              <DropdownToggle caret>
              <IoMenuSharp className="menu-icons"/>
              <span>All Categories</span>
                 </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action 1</DropdownItem>
                <DropdownItem>Action 2</DropdownItem>
                <DropdownItem>Action 3</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">New Arrivals</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">Deals For You</a>
          </li>
          <li>
            <a href="#">Discounts</a>
          </li>
          <li>
            <a href="#">Weekly Offers</a>
          </li>
          <li>
            <a href="#">Become A Vendor</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavLinks;
