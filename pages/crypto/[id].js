// pages/crypto/[id].js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchCryptoAPI } from '@/utils/api';

export default function CryptoDetail() {
  const { id } = useRouter().query;
  const [data, setData] = useState(null);

  useEffect(() => {
    if (id) {
      fetchCryptoAPI(id).then(setData);
    }
  }, [id]);

  if (!data) return <div className="text-white p-4">Loading crypto data...</div>;

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4">{data.name} Details</h1>
      <p>💲 Price: ${data.price}</p>
      <p>📉 24h Change: {data.change24h}%</p>
      <p>📊 Market Cap: ${data.marketCap.toLocaleString()}</p>
    </div>
  );
}
