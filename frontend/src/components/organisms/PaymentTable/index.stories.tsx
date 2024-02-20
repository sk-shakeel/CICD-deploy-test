import React from 'react'
import PaymentTable from '.'
import { PaymentTableRows } from '../../../utils/constants'

export default {
  title: 'Organisms/PaymentTable',
  component: PaymentTable,
}

export const Default = () => <PaymentTable rows={PaymentTableRows} />
