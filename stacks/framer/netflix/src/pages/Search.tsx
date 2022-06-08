import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

type Props = {};

export default function Search({}: Props) {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  console.log(location, searchParams.get('keyword'));
  return <div>Search</div>;
}
