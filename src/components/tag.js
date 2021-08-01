import * as React from "react";
import PropTypes from 'prop-types';

const Tag = ({ text }) => (
    <div className="tag p-16 mr-16 mb-16">{text}</div>
);

Tag.propTypes = {
    text: PropTypes.string,
}

export default Tag;