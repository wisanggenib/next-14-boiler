import React from 'react'
import { useLazyQuery, useMutation } from '@apollo/client'

import { FetchProduct } from '@/graphql/query/product'
import {
  StoreProductCategory,
  UpdateProductCategory,
} from '@/graphql/mutation/product'

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

  //handle modal
  const [modalState, setModalState] = React.useState({
    isOpen: false,
    state: 'new',
  })

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      state: 'new',
    })
    setCatName('')
    setTempData(null)
  }

  const handleAddData = () => {
    setModalState({
      isOpen: true,
      state: 'new',
    })
  }

  //edit / add  data
  const [tempData, setTempData] = React.useState<any>(null)
  const [catName, setCatName] = React.useState<string>('')
  const handleCatName = (val: string) => {
    setCatName(val)
  }
  const handleEditData = (val: any) => {
    setTempData(val)
    setModalState({
      isOpen: true,
      state: 'edit',
    })
    // setCatName(val?.name || '')
  }

  const [actionStore, { loading: loadingStore }] = useMutation(
    StoreProductCategory,
    {
      fetchPolicy: 'no-cache',
    }
  )

  const actionStoreData = async () => {
    if (catName === '') {
      return handleCloseModal()
    }
    try {
      const { data } = await actionStore({
        variables: {
          in: [{ name: catName }],
        },
      })

      if (data?.ProductCategory?.Store?.isSuccess) {
        // alert('success add data')
        handleCloseModal()
        await actionGetItems()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const [actionUpdate, { loading: loadingUpdate }] = useMutation(
    UpdateProductCategory,
    {
      fetchPolicy: 'no-cache',
    }
  )

  const actionUpdateData = async () => {
    if (catName === '') {
      return handleCloseModal()
    }
    try {
      const { data } = await actionUpdate({
        variables: {
          in: [{ name: catName, id: tempData?.id }],
        },
      })

      console.log(data)

      if (data?.ProductCategory?.Update?.isSuccess) {
        // alert('success add data')
        handleCloseModal()
        await actionGetItems()
      }
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
    data: { listData, tempData, modalState, catName },
    methods: {
      handleCatName,
      handleAddData,
      handleEditData,
      actionStoreData,
      actionUpdateData,
      handleCloseModal,
    },
  }
}

export default useHooks
