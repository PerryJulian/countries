export const styles: tailwindProps = {
  countryContainer: ['text-[#111517] dark:text-[#ffffff]'].join(' '),
  name: ['text-2xl', 'mb-4', 'font-extrabold'].join(' '),
  population: ['text-xl'],
  flagContainer: [
    'mb-11',
    'mx-auto',
    'w-[320px]',
    'h-[160px]',
    'relative',
    'rounded-[5px]',
  ].join(' '),
  flagImage: ['rounded-[5px]'],
  infoContainer: ['text-sm', 'leading-[32px]', 'font-light'].join(' '),
  infoHeading: ['font-semibold'].join(' '),
  primaryInfo: ['mb-8'].join(' '),
}

export interface tailwindProps {
  [key: string]: string[] | string
}
