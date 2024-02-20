import Theme from '../theme'

export const CardMetaData = [
  {
    key: 'Missing items',
    value: 79,
    color: Theme.palette.accent.red,
  },
  {
    key: 'Merchant rules',
    value: 0,
    color: Theme.palette.primary[500],
  },
  {
    key: 'Category rules',
    value: 0,
    color: Theme.palette.primary[500],
  },
  {
    key: 'Department rules',
    value: 0,
    color: Theme.palette.text.low,
  },
  {
    key: 'Location rules',
    value: 0,
    color: Theme.palette.text.low,
  },
]
export const AllCards = 'All Cards'
export const AllCardIcon = '../assets/images/date.svg'
export const AllCardIconAlt = 'date icon'
export const ReviewButton = 'Review'
export const FooterResultText = 'results'
export const FooterPreviousButton = 'Previous'
export const FooterNextButton = 'Next'

export const MerchantRuleModalHeading = 'Create merchant rule'
export const MerchantRuleModalText1 = 'Set a default QuickBooks Category for '
export const MerchantRuleModalText2 =
  ' This rule will be applied automatically to all unsynced and future transactions from '
export const MerchantRuleModalDropdownCaption = '42 unsynced transactions'
export const MerchantRuleModalCancelButton = 'Cancel'
export const MerchantRuleModalCreateRuleButton = 'Create rule'
export const CreateRulePopupHeading = 'Save time with a merchant Rule'
export const CreateRulePopupDescription =
  'as the default Quickbooks category for all the future and unsynced transactions from '
export const CreateRulePopupButton = 'Create rule'
export const NavButtons = [
  {
    name: 'Insights',
    isActive: false,
  },
  {
    name: 'Transaction',
    isActive: false,
  },
  {
    name: 'Cards',
    isActive: false,
  },
  { name: 'Company', isActive: false },
  { name: 'Bill pay', isActive: false },
  { name: 'Vendors', isActive: false },
  { name: 'Reimbursements', isActive: false },
  { name: 'Accounting', isActive: true },
]

export const NavLastButton = 'Ramp perks'

export const NewBillFormHeading = 'New bill'
export const NewBillFormCaption =
  'Ramp has retrieved data from this invoice and prefilled this bill'
export const NewBillFormQuestion = 'Who’s it for ?'
export const NewBillFormOwner = 'Gold Mining Outfitters'
export const NewBillFormCaption2 = 'No previous payment to this vendor.'
export const NewBillFormQuestion2 = 'What for ?'
export const NewBillFormDates = ['Invoice date', 'Bill due date']

export const NewBillFormPaymentTexts = [
  "Ramp will mail a check to your vendor's mailing address. You will be debited once check is cashed.",
  "Ramp will mail a check to your vendor's mailing address. You will be debited once check is cashed.",
  'Create a ramp virtual card for this bill. The card will expire once used 1.5% cashback.',
]
export const addButton = 'Add another line'
export const SaveBannerTitle = 'Save time with uploading invoice'
export const SaveBannerDescription =
  'Upload an invoice on the right and Ramp will read the invoice and prefill the bill for you. Or alternatively, do it the old fashioned way :'
export const SaveBannerButton = 'Skip Prefilling'
export const CategoryRuleHeading = 'Create category rule'
export const CategoryRulesHeading = 'Category Rules'
export const CategoryRuleContent =
  'Ramp automatically categorizes your card transactions. You can set a default QuickBooks Category for each Ramp Category below.'
export const CategoryRuleActive = 'Active rules'
export const CategoryRuleRecent = 'Recent Categories'

export const CategoryRules = [
  { RampCategory: 'Airlines', QuickbooksCategory: 'Travel' },
  { RampCategory: 'Fuel and Gas', QuickbooksCategory: 'Automobile:Fuel' },
  {
    RampCategory: 'Sass / Software',
    QuickbooksCategory: 'Dues & Subscriptions',
  },
]
export const CategoryRulesNew = [
  {
    RampCategory: 'Advertising',
    QuickbooksCategory: ['Expense', 'Advertising', 'Disposals', 'Bank charges'],
  },
  { RampCategory: 'Shipping', QuickbooksCategory: [] },
  {
    RampCategory: 'Other',
    QuickbooksCategory: [],
  },
]

export const CategoryRulesQuestion = 'What are category rules?'
export const CategoryRulesAnswer =
  'Category rules allow you to set a default Quickbooks Category for all transactions from a specific Ramp Category.'
export const SeeAllCategory = 'See all categories'
export const CancelButton = 'Cancel'

export const AmountData = {
  id: 1,
  amount: '',
  description: '',
  category: '',
  classType: '',
  job: '',
}

export const SuggestionPannelSearchText = 'Lyft'
export const SuggestionPannelSearchText1 = 'TRANSACTIONS'
export const SuggestionPannelSearchTip = 'Search tips'
export const SuggestionPannelText = 'Show all results for '
export const ClearFilter = 'Clear filter'
export const Filter = 'Filter'
export const Sync = 'Sync'

export const RampCardTableRows = [
  {
    id: 1,
    meta: {
      brand: 'Lyft',
      name: 'casio',
    },
    amount: 42000,
    date: 'Apr 14, 2004',
    user: {
      name: 'Hellena John',
      virtualId: 'Virtual 7007',
    },
    reciept: '#200257',
    memo: '21-00006',
    sync: 'Make ready',
  },
  {
    id: 2,
    meta: {
      brand: 'Lyft',
      name: 'arscris',
    },
    amount: 42000,
    date: 'Sep 10, 2010',
    user: {
      name: 'Afolabi David',
      virtualId: 'Virtual 7007',
    },
    reciept: '#526534',
    memo: '21-00004',
    sync: 'Make ready',
  },
  {
    id: 3,
    meta: {
      brand: 'Zara',
      name: 'deniel_we',
    },
    amount: 37000,
    date: 'Aug 28, 2004',
    user: {
      name: 'David Oshodi',
      virtualId: 'Virtual 7007',
    },
    reciept: '#526520',
    memo: '21-00010',
    sync: 'Make ready',
  },
  {
    id: 4,
    meta: {
      brand: 'Bershka',
      name: 'shop123',
    },
    amount: 21000,
    date: 'Aug 07, 2019',
    user: {
      name: 'Adekunle Fisayo',
      virtualId: 'Virtual 7007',
    },
    reciept: '#526589',
    memo: '21-00005',
    sync: 'Make ready',
  },
  {
    id: 5,
    meta: {
      brand: 'Stradivarius',
      name: 'demode',
    },
    amount: 17000,
    date: 'May 16, 2005',
    user: {
      name: 'Mbah Jacob',
      virtualId: 'Virtual 7007',
    },
    reciept: '#526587',
    memo: '21-00007',
    sync: 'Make ready',
  },
  {
    id: 6,
    meta: {
      brand: 'American Eagle',
      name: 'shopsieu',
    },
    amount: 12000,
    date: 'Aug 27, 2019',
    user: {
      name: 'James Friday',
      virtualId: 'Virtual 7007',
    },
    reciept: '#105986',
    memo: '20-00400',
    sync: 'Make ready',
  },
]

export const PaymentTableRows = [
  {
    id: 1,
    vendor: {
      name: 'Gold Mining',
      amount: 2864.5,
    },
    paymentStatus: {
      payment: 'ACH',
      status: 'Scheduled',
    },
    paymentDate: '2020-01-17',
    dueDate: '2020-02-04',
    invoiceDate: '2020-04-07',
  },
  {
    id: 2,
    vendor: {
      name: 'Span',
      amount: 6.51,
    },
    paymentStatus: {
      payment: 'ACH',
      status: 'Scheduled',
    },
    paymentDate: '2020-02-04',
    dueDate: '2020-02-23',
    invoiceDate: '2020-01-06',
  },
  {
    id: 3,
    vendor: {
      name: 'Tampflex',
      amount: 5.84,
    },
    paymentStatus: {
      payment: 'ACH',
      status: 'Scheduled',
    },
    paymentDate: '2020-02-23',
    dueDate: '2020-01-17',
    invoiceDate: '2020-01-26',
  },
  {
    id: 4,
    vendor: {
      name: 'Trippledex',
      amount: 2.29,
    },
    paymentStatus: {
      payment: 'ACH',
      status: 'Scheduled',
    },
    paymentDate: '2020-02-13',
    dueDate: '2020-02-08',
    invoiceDate: '2020-03-25',
  },
  {
    id: 5,
    vendor: {
      name: 'Voyatouch',
      amount: 7.77,
    },
    paymentStatus: {
      payment: 'ACH',
      status: 'Scheduled',
    },
    paymentDate: '2020-03-10',
    dueDate: '2020-02-13',
    invoiceDate: '2020-03-19',
  },
  {
    id: 6,
    vendor: {
      name: 'Tampflex',
      amount: 2.71,
    },
    paymentStatus: {
      payment: 'ACH',
      status: 'Scheduled',
    },
    paymentDate: '2020-02-08',
    dueDate: '2020-03-10',
    invoiceDate: '2020-02-09',
  },
]

export const OneLastLook = 'One last look'
// export const ApiBase = 'http://localhost:3000/'
export const ApiBase = 'http://localhost:9002/api/ramp/'

export const Categories = [
  {
    id: 1,
    name: 'RAMP',
    types: [
      {
        id: 1,
        name: 'Airlines',
      },
      {
        id: 2,
        name: 'Fuel & gas',
      },
      {
        id: 3,
        name: 'Saas / Software',
      },
      {
        id: 4,
        name: 'Advertising',
      },
      {
        id: 5,
        name: 'Shipping',
      },
      {
        id: 6,
        name: 'other',
      },
    ],
  },
  {
    id: 2,
    name: 'QUICKBOOKS',
    types: [
      {
        id: 101,
        name: 'Travel',
      },
      {
        id: 102,
        name: 'Auto Mobile:Fuel',
      },
      {
        id: 103,
        name: 'Dues & Descriptions',
      },
      {
        id: 104,
        name: 'Advertising',
      },
      {
        id: 105,
        name: 'Expense',
      },
      {
        id: 106,
        name: 'Travel Meals',
      },
      {
        id: 107,
        name: 'Hotels',
      },
      {
        id: 108,
        name: 'Disposals',
      },
      {
        id: 109,
        name: 'Bank charges',
      },
    ],
  },
]

export const categoryRules = [
  {
    id: 1,
    rampCategoryId: 1,
    quickBooksCategoryId: 101,
  },
  {
    id: 2,
    rampCategoryId: 2,
    quickBooksCategoryId: 102,
  },
  {
    id: 3,
    rampCategoryId: 3,
    quickBooksCategoryId: 103,
  },
]

export const merchantRules = [
  {
    id: 1,
    quickBooksCategoryId: 101,
  },
]

export interface paymentType {
  vendor: {
    name: string
    amount: number
  }
  paymentStatus: {
    payment: string
    status: 'SCHEDULED'
  }
  paymentDate: Date
  dueDate: Date
  invoiceDate: Date
  vendorContact: string
  invoiceNo: string
  quickbooksLocation: string
  paymentType: string
  fromAccNo: number
  toAccNo: number
  sendDate: Date
  recieveDate: Date
}

export const paymentTypeValues: paymentType = {
  vendor: {
    name: '',
    amount: 0,
  },
  paymentStatus: {
    payment: '',
    status: 'SCHEDULED',
  },
  paymentDate: new Date(),
  dueDate: new Date(),
  invoiceDate: new Date(),
  vendorContact: '',
  invoiceNo: '',
  quickbooksLocation: '',
  paymentType: '',
  fromAccNo: 0,
  toAccNo: 0,
  sendDate: new Date(),
  recieveDate: new Date(),
}
