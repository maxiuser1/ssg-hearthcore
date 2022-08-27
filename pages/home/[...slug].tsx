import { GetStaticPaths, GetStaticProps } from "next";
import { getPageWithUrl } from "../../lib/api";
import { IParams } from "../../lib/IParams";

export const DynamicPage = ({ page }: any) => (
  <div>
    <h1>{page.header}</h1>
    <div dangerouslySetInnerHTML={{ __html: page.subheader }}></div>
  </div>
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

export default DynamicPage;
