import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const CryptoCard = ({ id }) => {
  const router = useRouter();
  const [crypto, setCrypto] = useState({
    name: '',
    price: 0,
    change: 0,
  });

  useEffect(() => {
    // Mock API call — replace this with actual API if needed
    const fetchCrypto = async () => {
      try {
        // Example static data for now
        const data = {
          bitcoin: { name: 'Bitcoin', price: 65500, change: 2.5 },
          ethereum: { name: 'Ethereum', price: 3400, change: -1.2 },
        };
        setCrypto(data[id]);
      } catch (err) {
        console.error('Error fetching crypto data:', err);
      }
    };

    fetchCrypto();
  }, [id]);

  if (!crypto.name) return null; // Avoid rendering if data not ready

  return (
    <div
      onClick={() => router.push(`/crypto/${id}`)}
      className="bg-gray-800 text-white shadow-md rounded-lg p-4 w-full cursor-pointer hover:bg-gray-700"
    >
      <h3 className="text-xl font-bold mb-2">{crypto.name}</h3>
      <p>💲 Price: ${crypto.price}</p>
      <p className={crypto.change >= 0 ? 'text-green-400' : 'text-red-500'}>
        📉 Change: {crypto.change.toFixed(2)}%
      </p>
    </div>
  );
};

export default CryptoCard;
