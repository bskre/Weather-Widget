import { useWeather } from './swr.tsx'
import '../styles/index.css'

interface WeatherProps {
  lat: string;
  lon: string;
}

const cold = 'cold'
const cool = 'cool'
const hot = 'hot'

const wetherColor = (temp:string) => {
  return +temp > 18 ? hot:
         +temp < -5 ? cold: cool
}

export function WeatherWidget({ lat, lon }: WeatherProps) {
  const { data, error, isLoading } = useWeather(lat, lon);
  const temp = data?.current_weather?.temperature

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки</p>;


  return (
    <div className={wetherColor(temp)}>
      <p>Температура: {temp}°C</p>
    </div>
  );
}