import HeroSection from '../../ui/hero-section';
import BestSellingSection from '../../ui/best-selling-section';
import DefaultPageLayout from '../../ui/default-page-layout';

function Home({ products }) {
  return (
    <DefaultPageLayout>
      <HeroSection />

      <BestSellingSection products={products} />
    </DefaultPageLayout>
  );
}

export default Home;
