import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import LinkedinSvg from "../assets/linkedin.svg"
import MailSvg from "../assets/mail.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <a role="button" href="mailto:valeriiazub@sheridancollege.ca"><LinkedinSvg /></a>
      <a role="button" target="_black" href="https://www.linkedin.com/in/val-z/"><MailSvg /></a>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
