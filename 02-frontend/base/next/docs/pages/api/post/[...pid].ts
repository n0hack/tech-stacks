import { NextApiRequest, NextApiResponse } from 'next';
import { CookieSerializeOptions, serialize } from 'cookie';

const setCookie = (res: NextApiResponse, name: string, value: unknown, options: CookieSerializeOptions = {}) => {
  const stringValue = typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value);

  if (typeof options.maxAge === 'number') {
    options.expires = new Date(Date.now() + options.maxAge * 1000);
  }

  res.setHeader('Set-Cookie', serialize(name, stringValue, options));
};

type NextApiRequestWithFoo = NextApiRequest & {
  foo: () => void;
};

export default function handler(req: NextApiRequestWithFoo, res: NextApiResponse) {
  setCookie(res, 'Next.js', 'api-middleware!');
  req.foo?.();
  const { pid } = req.query;
  // res.end(`Post: ${pid}`);
  res.end(res.getHeader('Set-Cookie'));
}
