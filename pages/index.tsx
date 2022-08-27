import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { getPageWithUrl } from "../lib/api";
import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  const test = await getPageWithUrl("/home/hello");
  return {
    props: {
      test,
    },
    revalidate: 86400,
  };
};

const Home: NextPage = () => {
  return <div className={styles.container}></div>;
};

export default Home;
