'use client'

import { useEffect, useState } from 'react'
import { SearchResult } from '@/components/searchModule/searchResult/SearchResult'
import { SearchFilter } from '@/components/searchModule/searchFilter/SearchFilter'

function SearchModule({ initialValues }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(initialValues)
  const regions = [
    ...new Set(
      initialValues.map((result) => {
        return result.region
      })
    ),
  ].sort()

  useEffect(() => {
    if (query.length === 0) {
      setResults(initialValues)
      return
    }

    const value = initialValues.filter((country) => {
      const officialName = country.name.official.toLowerCase()
      return officialName.includes(query.toLowerCase())
    })

    value.length > 0 && setResults(value)
  }, [initialValues, query])

  function handleFilterChange(value) {
    const filterValue = value.target.outerText
    const results = initialValues.filter((country) => {
      return country.region === filterValue
    })
    setResults(results)
  }

  return (
    <div className={'SearchModule max-w-screen-xl mx-auto'}>
      <div
        className={
          'SearchFilters flex flex-col lg:flex-row lg:justify-between mx-4 mt-6 mb-10 lg:mt-12 lg:mx-0 lg:mb-12'
        }
      >
        <input
          className={
            'SearchModule-searchInput shadow-md w-full dark:bg-secondary-dark py-4 pl-[74px] max-w-[480px] rounded-[5px] text-[#111517] dark:text-[#FFFFFF]'
          }
          placeholder={'Search for a country...'}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div
          className={
            'SearchModule-searchFilter mt-10 lg:mt-0 relative max-w-[200px] w-full text-[#111517] dark:text-[#FFFFFF]'
          }
        >
          <SearchFilter filterValues={regions} onClick={handleFilterChange} />
        </div>
      </div>
      <div
        className={
          'SearchModule-results grid gap-10 lg:gap-[74px] md:grid-cols-2 lg:grid-cols-4'
        }
      >
        {results.map((country, index) => {
          return <SearchResult value={country} key={index} />
        })}
      </div>
    </div>
  )
}

export { SearchModule }
