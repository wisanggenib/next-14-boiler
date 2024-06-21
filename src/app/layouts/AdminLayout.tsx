/* eslint-disable @next/next/no-img-element */
'use client'

import { ReactNode } from 'react'
import HeaderUser from '../components/headerUser'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import Link from 'next/link'

type PrivateLayoutProps = {
  children: ReactNode
  handleLogout: () => void
}

const AdminLayout = ({ children, handleLogout }: PrivateLayoutProps) => {
  const userData = useSelector((state: RootState) => state.auth.userData)
  return (
    <div className="flex flex-row" style={{ height: '100vh', width: '100vw' }}>
      <div
        className="container flex flex-col shadow-2xl"
        style={{ width: '15vw' }}
      >
        <aside
          className="group/sidebar flex flex-col shrink-0 transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 left-0 bg-white border-r border-r-dashed border-r-neutral-200 sidenav fixed-start loopple-fixed-start"
          id="sidenav-main"
          style={{ width: '15vw' }}
        >
          <div className="flex shrink-0 px-8 items-center justify-between h-[96px]">
            <a
              className="transition-colors duration-200 ease-in-out"
              href="https://www.loopple.com"
            >
              <img
                alt="Logo"
                src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/logos/loopple.svg"
                className="inline"
              />
            </a>
          </div>

          <div className="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>

          <div className="flex items-center justify-between px-8 py-5">
            <div className="flex items-center mr-5">
              <div className="mr-5">
                <div className="inline-block relative shrink-0 cursor-pointer rounded-[.95rem]">
                  <img
                    className="w-[40px] h-[40px] shrink-0 inline-block rounded-[.95rem]"
                    src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar1.jpg"
                    alt="avatar image"
                  />
                </div>
              </div>
              <div className="mr-2 ">
                <a className="dark:hover:text-primary hover:text-primary transition-colors duration-200 ease-in-out text-[1.075rem] font-medium dark:text-neutral-400/90 text-secondary-inverse">
                  {userData?.name.slice(0, 10)}
                </a>
                <span className="text-secondary-dark dark:text-stone-500 font-medium block text-[0.85rem]">
                  {userData.role}
                </span>
              </div>
            </div>
            <div
              onClick={handleLogout}
              className="inline-flex relative items-center group justify-end text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-[.95rem] transition-colors duration-150 ease-in-out text-dark bg-transparent shadow-none border-0"
            >
              <span className="leading-none transition-colors duration-200 ease-in-out peer shrink-0 group-hover:text-primary text-secondary-dark">
                <svg
                  fill="#000000"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384.971 384.971"
                >
                  <g>
                    <g id="Sign_Out">
                      <path
                        d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03
			C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03
			C192.485,366.299,187.095,360.91,180.455,360.91z"
                      />
                      <path
                        d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279
			c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179
			c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"
                      />
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </g>
                </svg>
              </span>
            </div>
          </div>

          <div className="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>

          <div className="relative pl-3 my-5 overflow-y-scroll no-scrollbar">
            <div className="flex flex-col w-full font-medium">
              <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <Link
                    href="/admin/product-category"
                    className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Product Categories
                  </Link>
                </span>
              </div>
              <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <Link
                    href="/admin/product"
                    className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >
                    Products
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div
        style={{
          height: '100vh',
          overflow: 'hidden',
          width: '85vw',
          display: 'flex',
          flexDirection: 'row',
        }}
        className="no-scrollbar"
      >
        <div
          className="no-scrollbar p-2"
          style={{ height: '100%', overflow: 'scroll', width: '100%' }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
