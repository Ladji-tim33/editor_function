
import React from 'react';




const Myform = ({ type, name, onChange, value }) => {
    return (
      <div className="form-group"                                                   >
        <label htmlFor={name}></label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          id={name}
          name={name}
          placeholder='Enter text...'
          className="form-control bg-secondary text-white heut"
        />
      </div>
    );
  }

  

  export default Myform;

