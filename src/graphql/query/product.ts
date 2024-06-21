import { gql } from '@apollo/client'

const FetchProductCategory = gql`
  query FetchProductCategory {
    ProductCategory {
      Fetch(in: {}) {
        isSuccess
        message
        status
        data {
          items {
            id
            name
            createdAt
          }
        }
      }
    }
  }
`

const FetchProduct = gql`
  query FetchProduct(
    $name: String
    $userID: String
    $productCategoryID: String
  ) {
    Product {
      Fetch(
        in: { name: $name, vendorID: $userID, categoryID: $productCategoryID }
      ) {
        isSuccess
        message
        status
        data {
          items {
            id
            name
            desc
            price
            vendor {
              id
              name
            }
            category {
              id
              name
            }
            createdAt
          }
        }
      }
    }
  }
`

export { FetchProductCategory, FetchProduct }
