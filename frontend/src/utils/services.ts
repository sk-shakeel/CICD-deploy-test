import axios from 'axios'
import { ApiBase, paymentType } from './constants'

export const getTransaction = async () => {
  try {
    const response = await axios.get(ApiBase + 'transactions')
    return response.data
  } catch (error) {
    throw new Error('failed to get transaction')
  }
}

export const getMerchantRules = async () => {
  try {
    const response = await axios.get(ApiBase + 'merchantRules')
    return response.data
  } catch (error) {
    throw new Error('failed to get merchant rules')
  }
}
export const getCategoryRules = async () => {
  try {
    const response = await axios.get(ApiBase + 'categoryRules')
    return response.data
  } catch (error) {
    throw new Error('failed to get category rules')
  }
}

export const getCategories = async () => {
  try {
    const response = await axios.get(ApiBase + 'categories')
    return response.data
  } catch (error) {
    throw new Error('failed to get categories')
  }
}

interface addCategory {
  rampCategoryId: number
  quickBooksCategoryId: number
}

export const addCategoryRule = async (requestBody: addCategory) => {
  axios
    .post(ApiBase + 'categoryRules', requestBody)
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.error(error)
    })
}

interface addMerchant {
  merchantName: string
  quickBooksCategoryId: number
}

export const addMerchantRule = async (requestBody: addMerchant) => {
  axios
    .post(ApiBase + 'merchantRules', requestBody)
    .then((res) => {
      if (res.status === 201) {
        console.log(res.statusText)
      }
    })
    .catch((error) => {
      console.error(error)
    })
}

export const getPayments = async () => {
  try {
    const response = await axios.get(ApiBase + 'payments')
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const addPayment = async (requestBody: paymentType | null) => {
  axios
    .post(ApiBase + 'payments', requestBody)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error(error)
    })
}
