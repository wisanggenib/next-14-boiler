import React from 'react'
import { useLazyQuery } from '@apollo/client'

import { FetchProduct } from '@/graphql/query/product'

const useHooks = () => {
  //get data categories
  const [getItems, { loading, data, error }] = useLazyQuery(FetchProduct)

  const [listData, setListData] = React.useState<any>([])
  const actionGetItems = async () => {
    try {
      const { data } = await getItems({
        fetchPolicy: 'no-cache',
        variables: {
          userID: '',
          productCategoryID: '',
          name: '',
        },
      })
      if (data?.Product?.Fetch?.data?.items.length > 0) {
        console.log(data?.Product?.Fetch?.data?.items)
        return setListData(data?.Product?.Fetch?.data?.items)
      }

      setListData([])
    } catch (error) {
      console.log(error)
    }
  }

  //initiate get data
  React.useEffect(() => {
    actionGetItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    data: { listData },
    methods: {},
  }
}

export default useHooks
