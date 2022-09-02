import { GetStaticPaths, GetStaticProps } from "next";
import { getPageWithUrl } from "../lib/api";
import { IParams } from "../lib/IParams";
import styled from "styled-components";
export const DynamicPage = ({ page }: any) => (
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
    <section className="basic-hero">
      <div>
        <div className="basic-hero__content">
          <h1>{page.title}</h1>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/tranzact/image/upload/q_auto,f_auto,c_limit,w_2000,h_2000/MA/Medicare%20Advantage/qa/media/1704/hero-agents-bg.jpg"
        alt=""
        className="basic-hero__bg"
      />
    </section>
    <section>
      <div className="container">
        <span dangerouslySetInnerHTML={{ __html: page.contentText }}></span>
      </div>
    </section>
  </>
);

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  console.log("slug", slug);

  const page = await getPageWithUrl(`/home/${slug}`).catch(() => null);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
    },
    revalidate: 86400,
  };
};

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

export default DynamicPage;
