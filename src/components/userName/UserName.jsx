import React from 'react'
import './userName.css'
export const UserName = () => {
  return (
    <div className="container">
    <label className="label" htmlFor="fullName">Full name</label>
    <input
      type="text"
      id="fullName"
      // value={fullName}
      // onChange={handleChange}
      className="input"
    />
  </div>
  )
}
