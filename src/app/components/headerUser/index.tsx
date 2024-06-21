/* eslint-disable @next/next/no-img-element */
'use client'

const HeaderUser = ({ handleLogout }: { handleLogout: () => void }) => {
  return (
    <>
      <header className="bg-white drop-shadow-xl">
        <nav
          style={{ height: '10vh' }}
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12"></div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-5 items-center">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Pesanan Saya
            </a>
            <div
              onClick={handleLogout}
              className="text-sm font-semibold leading-6 bg-red-500 px-2 p-1 rounded-sm text-white cursor-pointer"
            >
              Logout <span aria-hidden="true">&rarr;</span>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default HeaderUser
