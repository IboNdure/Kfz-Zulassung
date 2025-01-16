"use client";

import styled from "styled-components";

export default function Header() {
  return (
    <header>
      <WebsiteName>Kfz Zulassungsstelle</WebsiteName>
    </header>
  );
}

const WebsiteName = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  padding: 2rem;
`;
