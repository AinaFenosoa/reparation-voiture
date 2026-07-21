import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import FeatureBanners from "../components/home/FeatureBanners";
import Features from "../components/home/Features";
import ProductGrid from "../components/home/ProductGrid";
import ProductCard from "../components/home/ProductCard";
import PromoBanner from "../components/home/PromoBanner";
import FlashDeals from "../components/home/FlashDeals";
import Newsletter from "../components/home/Newsletter";
import Brands from "../components/home/Brands";
import "./Home.css";

import brakePadImg from "../assets/product-brake-pad.png";
import engineImg from "../assets/product-engine.png";
import headlightImg from "../assets/product-headlight.png";
import dashboardImg from "../assets/product-dashboard.png";
import steeringImg from "../assets/product-steering.png";
import bulbsImg from "../assets/product-bulbs.png";
import scannerImg from "../assets/product-scanner.png";

import bannerMechanics from "../assets/banner-mechanics.png";
import bannerInterior from "../assets/banner-interior.png";
import bannerExterior from "../assets/banner-exterior.png";

// Best seller products matching mockup layout
const bestSellerProducts = [
  { id: 1, title: 'Product title here', price: 15.00, oldPrice: 20.00, image: brakePadImg, rating: 5, sale: true },
  { id: 2, title: 'Demo product title', price: 29.00, oldPrice: 39.00, image: engineImg, rating: 5 },
  { id: 3, title: 'Demo product name', price: 34.00, oldPrice: 44.00, image: headlightImg, rating: 5, newProduct: true },
  { id: 4, title: 'Product title here', price: 15.00, oldPrice: 20.00, image: dashboardImg, rating: 5, sale: true },
];

// All products list matching mockup layout
const allProducts = [
  { id: 5, title: 'Dummy text for title', price: 29.00, oldPrice: 39.00, image: steeringImg, rating: 5, sale: true },
  { id: 6, title: 'Product title here', price: 15.00, oldPrice: 20.00, image: brakePadImg, rating: 5, sale: true },
  { id: 7, title: 'Dummy product name', price: 34.00, oldPrice: 44.00, image: headlightImg, rating: 5 },
  { id: 8, title: 'Dummy text for title', price: 29.00, oldPrice: 39.00, image: bulbsImg, rating: 5, sale: true },
  { id: 9, title: 'Product title here', price: 15.00, oldPrice: 20.00, image: engineImg, rating: 5 },
  { id: 10, title: 'Dummy product name', price: 34.00, oldPrice: 44.00, image: headlightImg, rating: 5, newProduct: true },
  { id: 11, title: 'Product title here', price: 15.00, oldPrice: 20.00, image: dashboardImg, rating: 5, sale: true },
  { id: 12, title: 'Demo product title', price: 29.00, oldPrice: 39.00, image: scannerImg, rating: 5, newProduct: true },
];

export default function Home() {
  return (
    <div className="page-wrapper">
      <NavBar />
      
      <Hero />
      <FeatureBanners />
      <Features />

      <ProductGrid 
        title="BEST SELLER" 
        subtitle="Jukas car parts are recommended for you and your friends for your best driving and safe driving experience."
      >
        {bestSellerProducts.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductGrid>

      <div className="container promo-row-single">
        <PromoBanner 
          title="ALL KINDS OF PARTS THAT YOU NEED CAN FIND HERE"
          dark={false}
          image={bannerMechanics}
        />
      </div>

      <div className="container promo-row-double">
        <PromoBanner 
          title="Latest Interior Parts"
          code="NOMEN"
          dark={true}
          image={bannerInterior}
        />
        <PromoBanner 
          title="Latest Exterior Parts"
          code="NOMEN"
          dark={true}
          image={bannerExterior}
        />
      </div>

      <ProductGrid 
        title="ALL OF OUR PRODUCTS" 
        subtitle="Jukas car parts are recommended for you and your friends for your best driving and safe driving experience."
      >
        {allProducts.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductGrid>

      <FlashDeals />
      
      <Newsletter />
      
      <Brands />

      <Footer />
    </div>
  );
}