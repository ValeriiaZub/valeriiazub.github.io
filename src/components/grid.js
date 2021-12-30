import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const isBrowser = () => typeof window !== "undefined";

const computeGrid = (value) => {
    let gridCols = [];
    if (value instanceof Array) {
        for (let i of value) {
            gridCols.push(i)
        }
    } else if (!isNaN(value)) {
        for (let i = 0; i < value; i++) {
            gridCols.push('1fr')
        }
    }
    return gridCols.join(' ');
}

const Grid = ({ children, className, cols, rows, mobileCols, mobileRows }) => {
    const [width, setWidth] = useState(isBrowser() ? window.innerWidth : null);

    useEffect(() => {
        if (isBrowser()) {
            const handleResize = () => setWidth(window.innerWidth);
            window.addEventListener("resize", handleResize);
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    let colNumbers = cols;
    let rowNumbers = rows;
    if (width !== null && mobileCols && width <= 900) {
        colNumbers = mobileCols;
    }
    if (width !== null && mobileRows && width <= 900) {
        rowNumbers = mobileRows;
    }
    let gridCols = computeGrid(colNumbers);
    let gridRows = computeGrid(rowNumbers)

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
    cols: PropTypes.oneOf([PropTypes.number, PropTypes.arrayOf(PropTypes.string)]),
    rows: PropTypes.number,
    children: PropTypes.node,
    listOnMobile: PropTypes.bool
}

Grid.defaultProps = {
    cols: 1,
    rows: 1,
}

export default Grid;

