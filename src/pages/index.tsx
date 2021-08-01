import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Tag from "../components/tag"
import Hero from "../components/hero"
import BoxImage from "../components/boxImage"
import ArrowDown from "../assets/arrow_down.svg";

const IndexPage = ({ data }) => {
  const { about, home, work } = data.dataYaml;
  const image = getImage(about.profile);
  return <Layout>
    <Seo title="Home" />
    <Hero
      subText={home.subText}
      title={home.title}
      topText={home.topText}
    />
    <h2 className="f-regular mb-50">Explore my work <ArrowDown /></h2>
    {work.map((w, i) =>
      <BoxImage
        key={w.title}
        image={w.imageSrc}
        title={w.title}
        description={w.description}
        tags={w.tags}
        link={w.link}
      />
    )}
    <div>
      <h2>{about.title}</h2>
      <div className="flex">
        <GatsbyImage image={image} alt={about.profileAlt} />
        <div>
          <h5>{about.location}</h5>
          <div>
            {about.tags.map((tag, i) => <Tag key={`${tag}-${i}`} text={tag} />)}
          </div>
          {about.descriptions.map(description => <p key={description}>{description}</p>)}
        </div>
      </div>
    </div>
  </Layout>
}

export const queryResults = graphql`
  query HomePage {
    dataYaml {
      about {
        title
        location
        profileAlt
        profile {
          childImageSharp {
            gatsbyImageData(width: 400, height: 400)
          }
        }
        descriptions
        location
        tags
      }
      home {
        subText
        title
        topText
      }
      work {
        description
        imageSrc {
          childImageSharp {
            gatsbyImageData(width: 250, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        link
        tags
        title
      }
    }
  }
`;


export default IndexPage
