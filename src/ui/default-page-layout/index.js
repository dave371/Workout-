import Footer from '../footer';
import Navbar from '../navbar';

function DefaultPageLayout({ children, contentClassName }) {
  return (
    <div className="relative min-h-screen p-5 bg-primary text-secondary">
      <Navbar />
      <div className="py-20">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultPageLayout;
