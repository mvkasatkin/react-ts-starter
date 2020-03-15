import { FormikProps } from 'formik'

export interface BaseFieldProps {
  label: string
  name: string
  required?: boolean
  autoFocus?: boolean
}

export function getErrorText(formProps: FormikProps<any>, fieldName: string) {
  return (!!formProps.touched[fieldName] || formProps.submitCount > 0) && formProps.errors[fieldName]
}
