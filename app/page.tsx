import { SearchModule } from '@/components/searchModule/SearchModule'
export const revalidate = 0

async function getCountries() {
  const url =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : `https://${process.env.VERCEL_URL}`

  const countries: Response = await fetch(`${url}/api/list-countries`).then(
    (data) => data.json()
  )
  return countries
}

export default async function Home() {
  const { countries }: any = await getCountries()

  return (
    <main className={'Page-main'}>
      <SearchModule initialValues={countries} />
    </main>
  )
}
