import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { getPageWithUrl } from "../lib/api";
import styled from "styled-components";

export const getStaticProps = async () => {
  const page = await getPageWithUrl("/home");
  return {
    props: {
      page,
    },
    revalidate: 86400,
  };
};

const Nav = styled.nav`
  border: 1px solid #e0e0e0;
`;

const NavHeader = styled.nav`
  padding: 8px 0;
  img {
    margin-top: 13px;
    max-width: 280px;
  }
`;

const HeadingText = styled.span`
  font: 700 16px "Open Sans Condensed", sans-serif;
  text-align: right;
`;

const Home: NextPage = ({ page }: any) => {
  return (
    <>
      <Nav>
        <NavHeader>
          <div className="container-fluid">
            <img src="https://res.cloudinary.com/maxitech/image/upload/v1662096003/samples/ma/ma-logo-color_o2rb0r.svg"></img>
            <div>
              <HeadingText>{page.headerText}</HeadingText>
            </div>
          </div>
        </NavHeader>
      </Nav>
      <p>{JSON.stringify(page)}</p>
    </>
  );
};

export default Home;
