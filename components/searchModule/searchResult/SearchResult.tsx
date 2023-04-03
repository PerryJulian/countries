'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './SearchResultStyles.module.scss'
import Link from 'next/link'

function SearchResult({ value }: any) {
  const { name, population, region, capital, flags } = value
  const formatedPopulation = Number(population).toLocaleString('en-US')

  // console.log(name)
  const uri = encodeURIComponent(name.common)

  return (
    <Link href={`/${uri}`}>
      <div
        className={`${styles.SearchResult} w-[264px] mx-auto bg-secondary dark:bg-secondary-dark relative rounded-b-[5px] text-[#111517] dark:text-[#ffffff] rounded-t-[5px]`}
      >
        <div className={'w-[264px] h-[160px] relative'}>
          <Image
            className={'SearchResult-flag rounded-t-[5px]'}
            src={flags.png.toString()}
            alt={'flag'}
            fill={true}
            priority={true}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
        <div className={'SearchResult-content px-6 pt-6 pb-12'}>
          <div className={'font-extrabold text-lg mb-4'}>{name.common}</div>
          <div className={'text-sm font-light leading-[16px] mb-2'}>
            <span className={'font-semibold mr-1'}>Population:</span>
            {formatedPopulation}
          </div>
          <div className={'text-sm font-light leading-[16px] mb-2'}>
            <span className={'font-semibold mr-1'}>Region:</span>
            {region}
          </div>
          <div className={'text-sm font-light leading-[16px]'}>
            <span className={'font-semibold mr-1'}>Capital:</span>
            {capital}
          </div>
        </div>
      </div>
    </Link>
  )
}

export { SearchResult }
