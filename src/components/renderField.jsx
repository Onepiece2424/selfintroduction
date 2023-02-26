import React from "react"

const renderField = (({input, label, type, meta: { touched, error, warning }}) => {

  return (
    <>
      <label>{label}</label>
      <div className='alert-message'>
        <input {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </>
  )
});

export default renderField;
