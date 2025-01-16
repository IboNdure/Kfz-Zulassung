"use client";

import styled from "styled-components";
import Link from "next/link";

export default function Navbar() {
  return (
    <Nav>
      <Menu>
        <MenuItem>
          <Link href="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/services">Services</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/about">Über uns</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/contact">Kontakt</Link>
        </MenuItem>
      </Menu>
    </Nav>
  );
}

const Nav = styled.nav`
  background-color: #333;
  padding: 0 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 1px;
`;

const MenuItem = styled.li`
  flex: 1;
  text-align: center;

  a {
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    display: block;
    transition: color 0.2s ease, background-color 0.1s ease;

    &:hover {
      color: #0070f3;
      background-color: #444;
      border-radius: 5px;
    }
  }
`;
