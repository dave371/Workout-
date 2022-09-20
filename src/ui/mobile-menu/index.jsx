import LinkTemplate from '../link-template';

function MobileMenu() {
  const linkDefaultClassName = 'font-semibold text-lg';

  return (
    <div className="flex flex-col gap-2 px-5 py-2 md:hidden bg-primary">
      <LinkTemplate route="/" className="hover:text-gray-500">
        <span className={linkDefaultClassName}>Home</span>
      </LinkTemplate>
      <LinkTemplate route="/shop" className="hover:text-gray-500">
        <span className={linkDefaultClassName}>Shop</span>
      </LinkTemplate>
      <LinkTemplate route="/contact" className="hover:text-gray-500">
        <span className={linkDefaultClassName}>Contact</span>
      </LinkTemplate>
      <LinkTemplate route="/account" className="hover:text-gray-500">
        <span className={linkDefaultClassName}>Account</span>
      </LinkTemplate>
    </div>
  );
}

export default MobileMenu;
