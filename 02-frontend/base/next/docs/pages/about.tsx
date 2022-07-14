import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';

const About: NextPage = () => {
  useEffect(() => {
    const f = async () => {
      const res = await fetch('/api/hello');
      const data = await res.json();

      console.log(data);
    };
    f();
  }, []);

  return (
    <div>
      About
      <Link href="/blog">
        <a>ㅎㅇ</a>
      </Link>
    </div>
  );
};

export default About;
