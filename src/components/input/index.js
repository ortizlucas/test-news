import React from 'react'
import './index.scss'

const Input = props => {
  let {
    label,
    value,
    onChange,
    type,
    inputClass,
    labelClass
  } = props

  const handleInput = ({target}) => {
    let labelHtml = target.labels[0]
    !labelHtml.classList.contains('active') && labelHtml.classList.add('active')
  }
  const blurInput = ({target}) => {
    let labelHtml = target.labels[0]
    let inputValue = target.value
    inputValue.length === 0 && labelHtml.classList.remove('active')
  }

  return (
    <div className="contain-input">
      <label for={label} className={`contain-input__label ${labelClass ? labelClass : ''}`}>
        {label}
      </label>
      <input
        id={label}
        value={value}
        onChange={e => onChange(e)}
        onFocus={handleInput}
        onBlur={blurInput}
        type={type}
        className={`contain-input__input ${inputClass ? inputClass : ''}`}
      />
    </div>
  )
}

export default Input
