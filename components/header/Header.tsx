import styles from './HeaderStyles.module.scss'

const Header = () => {
  return (
    <nav
      className={`${styles.Header} py-8 px-4 bg-secondary shadow-xl dark:bg-secondary-dark `}
    >
      <ul className={'flex justify-between'}>
        <li className={'text-[#111517] dark:text-[#FFFFFF]'}>
          Where in the world?
        </li>
        {/*<li className={'text-[#111517] dark:text-[#FFFFFF]'}>Dark Mode</li>*/}
      </ul>
    </nav>
  )
}

export { Header }
