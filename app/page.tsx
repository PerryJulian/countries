import styles from './page.module.css'
import { SearchModule } from '@/components/searchModule/SearchModule'

async function getCountries() {
  const countries = await fetch('http://localhost:3000/api/list-countries')
  return countries.json()
}

export default async function Home() {
  const allCountries = await getCountries()

  return (
    <main className={'Page-main'}>
      <SearchModule initialValues={allCountries} />
    </main>
  )
}
