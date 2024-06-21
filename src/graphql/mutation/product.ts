import { gql } from '@apollo/client'

const StoreProductCategory = gql`
  mutation StoreProductCategory($in: [ProductCategoryDataInput!]) {
    ProductCategory {
      Store(in: $in) {
        isSuccess
        message
        status
      }
    }
  }
`

const UpdateProductCategory = gql`
  mutation UpdateProductCategory($in: [ProductCategoryDataInput!]) {
    ProductCategory {
      Update(in: $in) {
        isSuccess
        message
        status
      }
    }
  }
`

export { StoreProductCategory, UpdateProductCategory }
