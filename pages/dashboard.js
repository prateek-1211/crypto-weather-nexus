import { useSelector } from 'react-redux';
import WeatherCard from '../components/WeatherCard';
import CryptoCard from '../components/CryptoCard'; // ✅ Make sure this file has a default export
import NewsCard from '../components/NewsCard';
import Notification from '../components/Notification';

export default function Dashboard() {
  const weatherData = useSelector((state) => state.weather.data);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">🌐 CryptoWeather Nexus</h1>

      <Notification />

      {/* Weather Section */}
      <h2 className="text-2xl font-semibold mb-2">Weather</h2>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <WeatherCard city="New York" />
        <WeatherCard city="London" />
        <WeatherCard city="Tokyo" />
      </section>

      {/* Crypto Section */}
      <h2 className="text-2xl font-semibold mb-2">Top Cryptos</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <CryptoCard id="bitcoin" />
        <CryptoCard id="ethereum" />
      </section>

      {/* News Section */}
      <h2 className="text-2xl font-semibold mb-2">Latest Crypto News</h2>
      <NewsCard />

      {/* Extra Weather Rendering (optional) */}
      {Array.isArray(weatherData) && weatherData.map((item, index) => (
        <WeatherCard key={index} {...item} />
      ))}
    </div>
  );
}