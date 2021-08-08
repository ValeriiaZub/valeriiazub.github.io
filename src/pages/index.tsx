import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import BoxImage from "../components/boxImage"
import ArrowDown from "../assets/arrow_down.svg"
import AboutMe from "../components/aboutme"

const IndexPage = ({ data }) => {
  const { home } = data.dataYaml;
  const { nodes } = data.allWorkYaml
  return <Layout>
    <Seo title="Home" />
    <Hero
      subText={home.subText}
      title={home.title}
      topText={home.topText}
    />
    <h2 className="f-regular mb-50">Explore my work <ArrowDown /></h2>
    {nodes.map(({ work }, i) =>
      <BoxImage
        key={work.title}
        image={work.imageSrc}
        title={work.title}
        description={work.description}
        tags={work.tags}
        link={work.link}
      />
    )}
    <AboutMe />
  </Layout>
}

export const queryResults = graphql`
  query HomePage {
    dataYaml {
      home {
        subText
        title
        topText
      }
    }
    allWorkYaml(sort: {fields: work___index}) {
      nodes {
        work {
          description
          imageSrc {
            childImageSharp {
              gatsbyImageData(width: 400, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
          link
          tags
          title
        }
      }
    }
  }
`;


export default IndexPage
