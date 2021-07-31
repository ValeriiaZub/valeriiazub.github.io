import * as React from "react"
import PropTypes from "prop-types"

const Hero = ({ topText, title, subText }) => (
    <div>
        {topText ? <p>{topText}</p> : null}
        <h1>{title}</h1>
        <p>{subText}</p>
    </div>
)

Hero.propTypes = {
    topText: PropTypes.oneOfType([
        PropTypes.any,
        PropTypes.string
    ]),
    title: PropTypes.string,
    subText: PropTypes.string,
}

Hero.defaultProps = {
    topText: undefined,
    title: ``,
    subText: ``
}

export default Hero