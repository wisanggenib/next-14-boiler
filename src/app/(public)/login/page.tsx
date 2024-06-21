'use client'

import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { login } from '../../../store/slices/authSlice'
import { Wrapper } from './style'
import useHooks from './hooks'

const Login = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const {
    data: { isShowPassword },
    methods: { onClickEye },
  } = useHooks()

  const handleLogin = () => {
    dispatch(login())
    router.push('/dashboard')
  }

  return (
    <Wrapper style={{ background: '#F5F7F8' }}>
      <div
        className="p-8 border rounded-md w-2/6 flex flex-col gap-4 shadow-2xl"
        style={{ background: '#FFF' }}
      >
        <h3 className="font-bold text-2xl">Login</h3>
        <div>
          <label
            htmlFor="UserEmail"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700"> Email </span>

            <input
              type="email"
              id="UserEmail"
              placeholder="anthony@rhcp.com"
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />
          </label>
        </div>
        <div className="relative">
          <label
            htmlFor="UserPassword"
            className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <span className="text-xs font-medium text-gray-700">
              {' '}
              Password{' '}
            </span>
            <input
              type={isShowPassword ? 'text' : 'password'}
              id="UserPassword"
              placeholder="anthony@rhcp.com"
              className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />
            <div
              onClick={onClickEye}
              className="cursor-pointer absolute bottom-3 right-0 grid w-10 place-content-center text-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </label>
        </div>
        <div className="flex flex-row  w-full justify-center mt-5">
          <a
            className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
            href="#"
          >
            <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
              Login
            </span>
          </a>
        </div>
      </div>
      {/* <button onClick={handleLogin}>Login</button> */}
    </Wrapper>
  )
}

export default Login
