export interface coordinates{
    lat: string,
    lon: string
}

export interface CityInfo {
    city: string,
    cords: coordinates,
    timezone: string
}

export interface CityButtonProps {
  city: CityInfo,
  onClick: (city: CityInfo) => void,
  isTime:boolean
}

export interface CountryInfo {
    Country: string,
    Cites: CityInfo[]
}