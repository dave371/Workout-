import Link from 'next/link';

function LinkTemplate({ route = '/', className, children }) {
  return (
    <div>
      <Link href={route}>
        <a className={className}>{children}</a>
      </Link>
    </div>
  );
}

export default LinkTemplate;
