import useSWR from 'swr'

const BASE_URL = 'https://api.open-meteo.com/v1/forecast'
const fetcher = (url:string) => fetch(url).then(res => res.json())

export const useWeather = (latitude: string, longitude: string) => {
  
  const url = `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
  
  return useSWR(url, fetcher);
};
