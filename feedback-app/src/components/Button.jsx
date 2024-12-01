import React from 'react';

function Button({ children, version, type, isDisabled }) {
  console.log(version);
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

export default Button;
