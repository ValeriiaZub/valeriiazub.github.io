import * as React from 'react';

const Overflow = ({ children, className, caption }) => (
    <div className={`overflow-content ${className ?? ""}`}>
        {children}
        {caption ? <p className="align-right container">{caption}</p> : null}
    </div>
)

export default Overflow