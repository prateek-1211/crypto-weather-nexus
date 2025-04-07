// pages/weather/[city].js
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '@/redux/weatherSlice';

export default function CityDetail() {
  const router = useRouter();
  const { city } = router.query;
  const dispatch = useDispatch();
  const data = useSelector(state => state.weather[city]);

  useEffect(() => {
    if (city) dispatch(fetchWeather(city));
  }, [city]);

  if (!data) return <div className="text-white p-4">Loading details...</div>;

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4">📍 {city} Weather Details</h1>
      <p>🌡️ Temperature: {data.temp} °C</p>
      <p>🌥️ Condition: {data.condition}</p>
      <p>💧 Humidity: {data.humidity}%</p>
      <p>💨 Wind Speed: {data.wind} m/s</p>
    </div>
  );
}