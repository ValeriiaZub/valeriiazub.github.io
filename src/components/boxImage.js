import * as React from "react"
import PropTypes from "prop-types"

const BoxImage = ({ imageSrc, title, description, tags }) => (
    <div>
    </div>
)

BoxImage.propTypes = {
    imageSrc: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
}


export default BoxImage
