import { useQuery } from '@tanstack/react-query'
import { getState } from './tsq'
import { type CityInfo } from '../types/interfaces'

const mapToCityInfo = (raw: any):CityInfo => {
  return {
        city: raw.name,
        cords: {lat: raw.latitude, lon: raw.longitude},
        timezone: raw.timezone
  }
}

export function CityWidget():CityInfo[] {

  const { data: cities, isLoading, isError, error } = useQuery({
    queryKey: ['cities'],
    queryFn: () => getState(),
    staleTime: 5 * 60_000,

    select: (rawData) => rawData.map(mapToCityInfo),
    })

  if (isLoading)  console.log('Загрузка...')
  if (isError)  console.log(`Ошибка: ${error.message}`)
  return (cities)
}