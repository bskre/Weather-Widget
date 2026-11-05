import { type CityInfo} from './types/interfaces.tsx'
import { WeatherWidget } from './api/weather.tsx'
import { CityButton } from './components/CityButton.tsx';
import { useState, useMemo, memo, useCallback } from 'react'
import { CityWidget } from './api/city.tsx'
import './styles/index.css'


export function Search() {
  const [selectedCity, setSelectedCity] = useState<CityInfo | null>(null);
  const [isTime, setIsTime] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const CITES = CityWidget()

  const filterCity = useMemo(() => {
    
    return CITES?.filter(city => 
      city.city.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleCityClick = useCallback((city: CityInfo) => {
    setSelectedCity(city);
  }, []);


  return (
    <>
      <div className='weather'>
        {selectedCity ? (
        <WeatherWidget lat={selectedCity.cords.lat} lon={selectedCity.cords.lon} />
      ) : (
        <span>Выберите город</span>
      )}
      </div>
    <div className='search'>
      
      <div>
        <input  name="input" value={ searchQuery } onChange={(e) => setSearchQuery(e.target.value)} type="text" placeholder='Найти' />
        <button className='time' onClick={() => isTime?setIsTime(false):setIsTime(true)}>
          {isTime ? 'Скрыть\nвремя' : 'Показать\nвремя'}
        </button>
      </div>
      <div className='city-button-grid'>
        {filterCity?.map(city => (
        <div>
          <CityButton city={city} onClick={(city) => handleCityClick(city)} isTime ={isTime}/>
        </div>
        ))}
      </div>
      </div>
    </>
  );
}
