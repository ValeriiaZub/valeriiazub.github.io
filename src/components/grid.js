import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Grid = ({ children, className, cols, rows, mobileCols, mobileRows }) => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    let colNumbers = cols;
    let rowNumbers = rows;
    if (mobileCols && width <= 900) {
        colNumbers = mobileCols;
    }
    if (mobileRows && width <= 900) {
        rowNumbers = mobileRows;
    }
    let gridCols = '';
    for (let i = 0; i < colNumbers; i++) {
        gridCols += '1fr '
    }
    let gridRows = ''
    for (let i = 0; i < rowNumbers; i++) {
        gridRows += '1fr '
    }
    return <div className={className ?? ""} style={{
        display: 'grid',
        gridTemplateColumns: gridCols,
        gridTemplateRows: gridRows
    }}>
        {children}
    </div>
}

Grid.propTypes = {
    className: PropTypes.string,
    cols: PropTypes.number,
    rows: PropTypes.number,
    children: PropTypes.node,
    listOnMobile: PropTypes.bool
}

Grid.defaultProps = {
    cols: 1,
    rows: 1,
}

export default Grid;

