import { Menu } from '@headlessui/react'

function SearchFilter({ filterValues, onClick }) {
  return (
    // <div>
    <Menu>
      <Menu.Button className={'w-full'}>
        <button
          className={
            'bg-secondary dark:bg-secondary-dark px-6 py-4 shadow-md rounded-[5px] text-xs w-full text-left'
          }
        >
          Filter by Region
        </button>
      </Menu.Button>
      <Menu.Items>
        <div
          className={
            'absolute z-10 bg-secondary dark:bg-secondary-dark py-4 px-6 mt-1 rounded-[5px] w-full'
          }
        >
          {filterValues.map((filter, index) => {
            return (
              <Menu.Item key={index} onClick={onClick}>
                <div key={index} className={'mb-2 text-xs'}>
                  {filter}
                </div>
              </Menu.Item>
            )
          })}
        </div>
      </Menu.Items>
    </Menu>
    // </div>
  )
}

export { SearchFilter }
