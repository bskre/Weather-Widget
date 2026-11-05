import { memo } from 'react';
import type { CityInfo, CityButtonProps } from '../types/interfaces';
import { Timer } from '../components/Timer.tsx';
import '../styles/index.css'



export const CityButton = memo(({ city, onClick, isTime }: CityButtonProps) => {
  return (
    <button
      onClick={() => onClick(city)}
      className='city-button'
    >
      {city.city}
      <div>
        {isTime ?  (
        <Timer timezone={city.timezone}/>
        ) : (
            <span></span>
        )}
      </div>
    </button>
  );
});