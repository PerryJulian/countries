import { Menu } from '@headlessui/react'

interface SearchFilterProps {
  filterValues: any
  onClick: (value: any) => void
}

function SearchFilter({ filterValues, onClick }: SearchFilterProps) {
  return (
    <Menu>
      <Menu.Button className={'w-full'}>
        <div
          className={
            'bg-secondary dark:bg-secondary-dark px-6 py-4 shadow-md rounded-[5px] text-xs w-full text-left'
          }
        >
          Filter by Region
        </div>
      </Menu.Button>
      <Menu.Items>
        <div
          className={
            'absolute z-10 bg-secondary dark:bg-secondary-dark py-4 px-6 mt-1 rounded-[5px] w-full'
          }
        >
          {filterValues.map((filter: any, index: number) => {
            return (
              <Menu.Item key={index}>
                <a
                  key={index}
                  onClick={onClick}
                  className={'mb-2 block text-xs'}
                >
                  {filter}
                </a>
              </Menu.Item>
            )
          })}
        </div>
      </Menu.Items>
    </Menu>
  )
}

export { SearchFilter }
