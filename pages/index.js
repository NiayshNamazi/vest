
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <h1>Welcome to My Website</h1>
      <p>This is the home page.</p>
      <p>This is the home page.</p>
      <p>This is the home page.</p>
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
