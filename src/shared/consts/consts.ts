export const QUESTION_TYPE = {
  singleOption: {
    fieldType: 'input',
    inputType: 'radio',
  },
  singleOptionSelect: {
    fieldType: 'select',
  },
  multiOption: {
    fieldType: 'input',
    inputType: 'checkbox',
  },
  short: {
    fieldType: 'input',
    inputType: 'text',
  },
  long: {
    fieldType: 'textarea',
  },
} as const

export const QUIZ_DATA = 'QUIZ_DATA'
