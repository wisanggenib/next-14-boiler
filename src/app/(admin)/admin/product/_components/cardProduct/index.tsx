/* eslint-disable @next/next/no-img-element */
'use client'

const CardProduct = ({ data }: { data: any }) => {
  return (
    <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            {data?.name}
          </h3>

          {/* <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p> */}
        </div>

        <div className="hidden sm:block sm:shrink-0">
          <img
            alt=""
            src="https://cpworldgroup.com/wp-content/uploads/2021/01/placeholder.png"
            className="size-16 rounded-lg object-cover shadow-sm"
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-pretty text-sm text-gray-500">{data?.desc}</p>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">
            {data?.vendor?.name}
          </dt>
          <dd className="text-xs text-gray-500">Vendor</dd>
        </div>

        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Price</dt>
          <dd className="text-xs text-gray-500">Rp. {data?.price}</dd>
        </div>
      </dl>
    </div>
  )
}

export default CardProduct
