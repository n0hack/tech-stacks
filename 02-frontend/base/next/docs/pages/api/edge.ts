import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req: NextRequest) {
  return new Response(JSON.stringify({ name: 'Dante' }), { status: 200, headers: { 'content-type': 'application/json' } });
}
