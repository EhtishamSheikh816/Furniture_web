import BlogGrid from "@/components/blog";
import Display from "@/components/displat";
import ProductGrid from "@/components/feature";
import RocketSingleSeater from "@/components/hero";
import InstagramBanner from "@/components/insta";
import ProductGridList from "@/components/product";

export default function Home() {
  return (
    <div className="">
      <RocketSingleSeater/>
      <ProductGrid/>
      <ProductGridList/>
      <Display/>
      <BlogGrid/>
      <InstagramBanner/>
      </div>
  );
}
