'use client'

import useHooks from './hooks'
import { Wrapper } from './styles'
import CardProduct from './_components/cardProduct'

const Dashboard = () => {
  const {
    data: { listData },
    methods: {},
  } = useHooks()
  return (
    <Wrapper className="p-5">
      <div className="text-2xl font-semibold mb-5">List Product</div>
      <div className="grid grid-cols-4 gap-5 bg-white shadow-2xl p-5 h-full overflow-scroll no-scrollbar rounded-md">
        {listData?.map((e: any, key: any) => (
          <div key={key}>
            <CardProduct data={e} />
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default Dashboard
