import { tailwindProps } from '@/app/[countryName]/countryDetail/styles'

export const styles: tailwindProps = {
  page: ['px-6', 'pt-10'].join(' '),
  backButton: [
    'px-6',
    'py-2',
    'mb-16',
    'bg-secondary',
    'dark:bg-secondary-dark',
    'shadow-button',
    'rounded-[2px]',
    'text-sm',
    'font-light',
  ].join(' '),
}
