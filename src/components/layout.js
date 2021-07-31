/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      dataYaml {
        footer {
            subTitle
            title
        }
      }
      site {
        siteMetadata {
          title
          social {
            email
            linkedin
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="container">
        <Header siteTitle={data.site.siteMetadata.title}
          email={data.site.siteMetadata.social.email}
          linkedin={data.site.siteMetadata.social.linkedin} />
        <main className="content">
          {children}
        </main>
        <Footer
          footerTitles={data.dataYaml.footer}
          email={data.site.siteMetadata.social.email}
          linkedin={data.site.siteMetadata.social.linkedin} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
