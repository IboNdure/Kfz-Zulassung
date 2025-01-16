"use client";
import styled from "styled-components";
import banner from "@/public/tüvimage.jpg";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <HeaderWrapper>
        <Banner>
          <Image
            src={banner}
            alt="TÜV Banner"
            layout="fill"
            objectFit="cover"
          />
        </Banner>
      </HeaderWrapper>
      <WebsiteName>Kfz Zulassungsstelle</WebsiteName>
    </>
  );
}

const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
`;

const Banner = styled.div`
  width: 100%;
  height: 250px;
`;

const WebsiteName = styled.h1`
  text-align: center;
  margin-top: 0rem;
  padding: 1rem;
  font-size: 2rem;
  color: white;
`;
