import React from 'react';

const Index = ({title,children}) => {

    return(
        <label className="container-checkbox">
        {title}
      {children}
        <span className="checkmark"></span>
      </label>
    )
}

export default Index;