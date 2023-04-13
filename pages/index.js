import React from 'react';
import Link from 'next/link';

const index = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Home Page hai</h1>
      <Link href="/Product">PROFILE....</Link>
    </div>
  );
};

export default index;
