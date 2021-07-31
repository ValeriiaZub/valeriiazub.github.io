import * as React from "react"
import PropTypes from "prop-types"

const Hero = ({ topText, title, subText }) => (
    <div style={{ marginBottom: 150 }}>
        {topText ? <p className="f-24">{topText}</p> : null}
        <h1 className="f-56">{title}</h1>
        <p className="f-24">{subText}</p>
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