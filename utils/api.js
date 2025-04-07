const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

// ✅ Weather API
export const fetchWeatherAPI = async (city) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const data = await res.json();
    return {
      temp: data.main?.temp ?? 'N/A',
      condition: data.weather?.[0]?.main ?? 'Unknown',
      humidity: data.main?.humidity ?? 'N/A',
      wind: data.wind?.speed ?? 'N/A'
    };
  } catch (error) {
    console.error("Weather API Error:", error);
    return {
      temp: 'N/A',
      condition: 'Unknown',
      humidity: 'N/A',
      wind: 'N/A'
    };
  }
};

// ✅ Crypto API with 24h change and market cap
export const fetchCryptoAPI = async (id) => {
  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
    const data = await res.json();

    return {
      name: data.name ?? 'Unknown',
      price: data.market_data?.current_price?.usd ?? 'N/A',
      change24h: data.market_data?.price_change_percentage_24h?.toFixed(2) ?? 'N/A',
      marketCap: data.market_data?.market_cap?.usd ?? 'N/A'
    };
  } catch (error) {
    console.error("Crypto API Error:", error);
    return {
      name: 'Unknown',
      price: 'N/A',
      change24h: 'N/A',
      marketCap: 'N/A'
    };
  }
};

// ✅ News API (top 5 headlines)
export const fetchNewsAPI = async () => {
  try {
    const res = await fetch(
      `https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&q=crypto&language=en`
    );
    const data = await res.json();

    if (Array.isArray(data.results)) {
      return data.results.slice(0, 5);
    } else {
      console.error("News API: results is not an array", data);
      return [];
    }
  } catch (error) {
    console.error("News API Error:", error);
    return [];
  }
};
