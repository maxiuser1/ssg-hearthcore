import type { NextPage } from "next";
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

const Home: NextPage = ({ page }: any) => {
  return (
    <>
      <Nav>
        <NavHeader>
          <div className="container-fluid">
            <img src="https://res.cloudinary.com/maxitech/image/upload/v1662096003/samples/ma/ma-logo-color_o2rb0r.svg"></img>
            <div>
              <HeadingText>{page.headerText}</HeadingText>
              <ContactPhone>1-855-964-5518</ContactPhone> | <ContactTty>TTY 711, 24/7</ContactTty>
            </div>
          </div>
        </NavHeader>
        <NavMenu>
          <div className="container-fluid">
            <ul>
              <li>
                <a>Plan Options</a>
              </li>
              <li>
                <a>Learn About Medicare</a>
              </li>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Compare Plans</a>
              </li>
            </ul>
          </div>
        </NavMenu>
      </Nav>
      <Hero>
        <div className="container">
          <div className="col-lg-7">
            <span dangerouslySetInnerHTML={{ __html: page.headingText }}></span>
          </div>
          <div className="col-lg-5">
            <img src="https://res.cloudinary.com/maxitech/image/upload/v1662117780/samples/ma/laptop-animation_x8rnzh.webp"></img>
          </div>
        </div>
      </Hero>
    </>
  );
};

const Hero = styled.div`
  background: #eff3fc;
  padding-top: 60px;
  h1 {
    font-size: 41px;
    span {
      display: inline-block;
      position: relative;
      &:after {
        background-image: url(https://res.cloudinary.com/maxitech/image/upload/v1662118036/samples/ma/line_lcokex.svg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        content: "";
        display: block;
        height: 100%;
        left: 50%;
        position: absolute;
        top: -2px;
        transform: translate(-50%, 50%);
        width: 130%;
      }

      u {
        text-decoration: none;
      }
    }
  }
`;

const NavMenu = styled.div`
  box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 10%);
  ul {
    outline: 0;
    padding: 0;
  }
  li {
    position: static;
    float: left;
    display: block;
    a {
      color: #3b2760;
      padding: 10px 15px;
      font: 600 16px "Open Sans Condensed", sans-serif;
    }
  }
`;

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
  font-size: 16px;
  font-weight: 700;
  text-align: right;
  display: block;

  -webkit-font-smoothing: antialiased;
`;

const ContactPhone = styled.span`
  color: #2aabf7;
  font: 700 22px "Open Sans Condensed", sans-serif;
`;

const ContactTty = styled.span`
  font: 700 22px "Open Sans Condensed", sans-serif;
`;

export default Home;
