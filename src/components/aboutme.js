import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Tag from "../components/tag"

const AboutMe = () => {
    const data = useStaticQuery(graphql`
        query AboutMeComponent {
            dataYaml {
                about {
                    title
                    location
                    profileAlt
                    profile {
                      childImageSharp {
                        gatsbyImageData(width: 150, height: 150)
                      }
                    }
                    descriptions
                    location 
                    tags
                }
            }
        }
    `)
    const { about } = data.dataYaml;
    const image = getImage(about.profile);
    return <div style={{ marginTop: 80 }}>
        <h2 className="f-56">{about.title}</h2>
        <div className="flex">
            <div style={{ width: 150, height: 150 }}>
                <GatsbyImage style={{ width: 150, height: 150 }} image={image} alt={about.profileAlt} />
            </div>
            <div className="about">
                <p>{about.location}</p>
                <div className="inline">
                    {about.tags.map((tag, i) => <Tag key={`${tag}-${i}`} text={tag} />)}
                </div>
                {about.descriptions.map(description => <p key={description}>{description}</p>)}
            </div>
        </div>
    </div>
}

export default AboutMe