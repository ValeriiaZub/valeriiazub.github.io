import * as React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ children, className, cols, rows }) => {
    let gridCols = '';
    for (let i = 0; i < cols; i++) {
        gridCols += '1fr '
    }
    let gridRows = ''
    for (let i = 0; i < rows; i++) {
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
}

Grid.defaultProps = {
    cols: 1,
    rows: 1,
}

export default Grid;

