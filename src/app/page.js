import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/heroSection/HeroSection";
import ProductsSection from "@/components/products/ProductsSection";

export default function Home() {
  return (
    <main className={styles.main} style={{width:"100%"}}>
      <HeroSection />
      <ProductsSection />
    </main>
  );
}
