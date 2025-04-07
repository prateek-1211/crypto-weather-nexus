import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const WeatherCard = ({ city }) => {
  const router = useRouter();
  const [data, setData] = useState({
    temp: 0,
    condition: '',
  });

  useEffect(() => {
    // Mock weather data — replace with real API call
    const fetchWeather = async () => {
      const mockWeatherData = {
        'New York': { temp: 22, condition: 'Cloudy' },
        London: { temp: 18, condition: 'Rainy' },
        Tokyo: { temp: 27, condition: 'Sunny' },
      };
      setData(mockWeatherData[city]);
    };

    fetchWeather();
  }, [city]);

  if (!data.condition) return null; // Don't render if data not available

  return (
    <div
      onClick={() => router.push(`/weather/${city}`)}
      className="bg-blue-600 text-white rounded-xl p-4 w-full cursor-pointer hover:bg-blue-700"
    >
      <h3 className="text-xl font-bold">{city}</h3>
      <p>🌡️ {data.temp}°C - {data.condition}</p>
    </div>
  );
};

export default WeatherCard;
