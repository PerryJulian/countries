import { styles } from './styles'
import Image from 'next/image'
import { getFirstKey, getLastKey } from '@/helpers/ObjectHelpers'

export const CountryDetail = ({ country }: any) => {
  // console.log(country, 'country')
  const {
    name,
    capital,
    region,
    subregion,
    population,
    borders,
    tld,
    languages,
    flags,
    currencies,
  } = country

  const formatedPopulation = Number(population).toLocaleString('en-US')

  const getNativeName = () =>
    name.nativeName[getLastKey(name.nativeName)].common

  const getCurrency = () => currencies[getFirstKey(currencies)].name

  console.log(languages, 'languages')

  return (
    <div className={`CountryDetail-country ${styles.countryContainer}`}>
      <div className={`CountryDetail-flag ${styles.flagContainer}`}>
        <Image
          className={`CountryDetail-flag-image ${styles.flagImage}`}
          src={flags.png.toString()}
          alt={'flag'}
          fill={true}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      <h1 className={`CountryDetail-name ${styles.name}`}>{name.common}</h1>
      <div className={`CountryDetail-info ${styles.infoContainer}`}>
        <div className={`CountryDetail-primaryInfo ${styles.primaryInfo}`}>
          <div>
            <span className={`${styles.infoHeading}`}>Native Name:</span>{' '}
            {getNativeName()}
          </div>
          <div>
            <span className={`${styles.infoHeading}`}>Population:</span>{' '}
            {formatedPopulation}
          </div>
          <div>
            <span className={`${styles.infoHeading}`}>Region:</span> {region}
          </div>
          <div>
            <span className={`${styles.infoHeading}`}>Sub Region:</span>{' '}
            {subregion}
          </div>
          <div>
            <span className={`${styles.infoHeading}`}>Capital:</span> {capital}
          </div>
        </div>
        <div className={`CountryDetail-secondaryInfo`}>
          <div>
            <span className={`${styles.infoHeading}`}>Top Level Domain:</span>{' '}
            {tld}
          </div>
          <div>
            <span className={`${styles.infoHeading}`}>Currencies:</span>{' '}
            {getCurrency()}
          </div>
          <div>
            <span className={`${styles.infoHeading}`}>Languages:</span>{' '}
            {population}
          </div>
          <div>Border Countries: {population}</div>
        </div>
      </div>
    </div>
  )
}
