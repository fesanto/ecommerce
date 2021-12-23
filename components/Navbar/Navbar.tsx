import React from "react";
import Link from "next/link";
import styled from "styled-components";

const NavItems = styled.ul`
  display: flex;
  justify-content: space-between;
`

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="container">
        <NavItems>
         <li>Bakery</li>
         <li>Fruits and vegetables</li>
         <li>Meat and fish</li>
         <li>Drinks</li>
         <li>Kitchen</li>
         <li>Specil nutrition</li>
         <li>Baby</li>
         <li>Pharmacy</li> 
        </NavItems>
      </div>
    </nav>
  );
};
