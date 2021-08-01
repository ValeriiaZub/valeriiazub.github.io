import * as React from "react"
import PropTypes from "prop-types"
import SocialLinks from "./socialLinks"

const Header = ({ email, linkedin }) => (
  <header className="h-200">
    <SocialLinks title="Valeriia Zub" email={email} linkedin={linkedin} />
  </header>
)

Header.propTypes = {
  email: PropTypes.string,
  linkedin: PropTypes.string,
}


export default Header
