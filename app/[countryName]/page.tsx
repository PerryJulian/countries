// export const revalidate = 0

import { NextResponse } from 'next/server'
import { CountryDetail } from '@/app/[countryName]/countryDetail/CountryDetail'
import Link from 'next/link'
import { styles } from './styles'

// export async function generateStaticParams() {
//   const countries: Response = await fetch(
//     `https://restcountries.com/v3.1/all`,
//     {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }
//   ).then((data) => data.json())
//
//   const data = await countries
//
//   // console.log(data, 'data')
//
//   // return await countries.map((country) => {
//   //   return { name: country.name.common }
//   // })
//   return ['']
// }

async function getCountry(country: any) {
  const url =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : `https://${process.env.VERCEL_URL}`

  // const fetchUrl = `${url}/api/get-country/${country}` this endpoint is not working when called from the server
  const fetchUrl = `https://restcountries.com/v3.1/name/${country}`

  const data: Response = await fetch(fetchUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return await data.json()
}

interface Params {
  params: {
    countryName: string
  }
}

export default async function Country({ params: country }: Params) {
  const { countryName } = country

  const [countryData] = await getCountry(countryName)
  return (
    <div className={`CountryDetailPage ${styles.page}`}>
      <button className={`CountryDetailPage-back ${styles.backButton}`}>
        <Link href="/">Back</Link>
      </button>
      <CountryDetail country={countryData} />
    </div>
  )
}
