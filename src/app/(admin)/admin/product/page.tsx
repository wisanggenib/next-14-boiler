'use client'

import useHooks from './hooks'
import { HeaderSection, Wrapper } from './style'
import CardProduct from './_components/cardProduct'

const Dashboard = () => {
  const {
    data: { listData, modalState, catName, tempData },
    methods: {
      handleCatName,
      handleAddData,
      handleEditData,
      actionStoreData,
      handleCloseModal,
      actionUpdateData,
    },
  } = useHooks()
  return (
    <Wrapper className="no-scrollbar flex flex-col">
      {modalState.isOpen && (
        <div className="fixed z-50 inset-0 flex items-center justify-center overflow-hidden">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div className="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {modalState.state === 'edit' ? 'Edit' : 'Add'} Category
              </h3>
              <div className="mt-2">
                <div>
                  <label
                    htmlFor="UserEmail"
                    className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <span className="text-xs font-medium text-gray-700">
                      New Product Name
                    </span>

                    <input
                      onChange={(e) => {
                        handleCatName(e?.target.value)
                      }}
                      value={catName}
                      type="email"
                      id="UserEmail"
                      placeholder={
                        tempData?.name
                          ? tempData?.name
                          : 'add new category name'
                      }
                      className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleCloseModal}
              >
                Close
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={
                  modalState?.state === 'edit'
                    ? actionUpdateData
                    : actionStoreData
                }
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      <HeaderSection>
        <div className="text-2xl font-semibold">List Products</div>
        <div
          onClick={handleAddData}
          className="bg-blue-500 text-center p-2 px-4 rounded-md text-white font-medium hover:bg-blue-700 cursor-pointer hover:font-bold"
        >
          Add Data
        </div>
      </HeaderSection>
      <div
        className="overflow-y-scroll mt-5 no-scrollbar gap-5 flex flex-col"
        style={{ height: '100%' }}
      >
        {listData?.map((e: any) => (
          <div key={e?.id}>
            <CardProduct data={e} />
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default Dashboard
