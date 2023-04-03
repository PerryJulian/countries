import { SearchModule } from '@/components/searchModule/SearchModule'
export const revalidate = 0

async function getCountries() {
  const countries = await fetch('https://restcountries.com/v3.1/all', {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await countries.json()

  data.sort((a: any, b: any) => {
    return a.name.common.localeCompare(b.name.common)
  })

  return data
}

export default async function Home() {
  const data: any = await getCountries()

  return (
    <main className={'Page-main'}>
      <SearchModule initialValues={data} />
    </main>
  )
}
