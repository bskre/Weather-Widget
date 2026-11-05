const CSC_KEY = import.meta.env.VITE_CSC_API_KEY

export async function getState(countryCode = 'RU') {
  const url = new URL(
    `https://api.countrystatecity.in/v1/countries/${countryCode}/states`
  )

  const res = await fetch(url, {
    headers: { 'X-CSCAPI-KEY': CSC_KEY },
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

