import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Tag from "../components/tag"
import Hero from "../components/hero"
import { Link } from "@reach/router"
// import Hero from "../components/hero"
// import AboutWidget from "../components/aboutMe"
// import BoxImage from "../components/boxImage"

const IndexPage = ({ data }) => {
  const { about, home, work, footer } = data.dataYaml;
  const image = getImage(about.profile);
  const workImages = work.map(w => getImage(w.imageSrc));
  return <Layout>
    <Seo title="Home" />
    <Hero
      subText={home.subText}
      title={home.title}
      topText={home.topText}
    />
    <h2>Explore my work</h2>
    {work.map((w, i) =>
      <Link to={w.link} key={w.link}>
        <div>
          <GatsbyImage image={workImages[i]} alt={w.title} />
          <div>
            <h3>{w.title}</h3>
            <p>{w.description}</p>
            {w.tags.map(t => <Tag text={t} />)}
          </div>
        </div>
      </Link>
    )}
    <div>
      <h2>{about.title}</h2>
      <div className="flex">
        <GatsbyImage image={image} alt={about.profileAlt} />
        <div>
          <h5>{about.location}</h5>
          <div>
            {about.tags.map(tag => <Tag text={tag} />)}
          </div>
          {about.descriptions.map(description => <p>{description}</p>)}
        </div>
      </div>
    </div>
    <footer>
      {footer.map(({ title, subTitle }) =>
        <div key={title} className="w-1/2">
          <h4>{title}</h4>
          <p>{subTitle}</p>
        </div>
      )}
    </footer>
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
            gatsbyImageData(width: 250, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
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
      footer {
        title
        subTitle
      }
    }
  }
`;


export default IndexPage
