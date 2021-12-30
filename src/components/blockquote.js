import * as React from "react";
import PropTypes from 'prop-types';

const BlockQuote = ({ children, background }) => (
    <blockquote style={{backgroundColor: background}}><p>{children}</p></blockquote>
);

BlockQuote.propTypes = {
    background: PropTypes.string,
    children: PropTypes.node,
}

export default BlockQuote;