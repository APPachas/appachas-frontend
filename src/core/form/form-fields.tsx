import { useField } from 'formik'
import { FC } from 'react'

type Props = {
  [key: string]: any
  name: string
}

export const FormikInput: FC<Props> = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className={'form-group'}>
      <input className={'input'} {...field} {...props} />
      <label className={'input--label'} htmlFor={props.id || props.name}>
        {label}
      </label>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  )
}

export const FormikSelect: FC<Props> = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className={'form-group'}>
      <select className={'input'} {...field} {...props} />
      <label className={'input--label'} htmlFor={props.id || props.name}>
        Categrias
      </label>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  )
}

export const FormikCheckbox: FC<Props> = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' })
  return (
    <div className={'form-group'}>
      <label className="checkbox--label">
        <input className={'checkbox'} type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  )
}

export const FormikToggle: FC<Props> = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' })
  return (
    <div className={'form-group'}>
      <label className="switch">
        <input className={'switch--input'} type="checkbox" {...field} {...props} />
        <span className={'switch--label'}>{children}</span>
      </label>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  )
}
