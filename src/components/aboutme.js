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
                practices {
                    number
                    descriptions
                    title
                }
            }
        }
    `)
    const { about, practices } = data.dataYaml;
    const image = getImage(about.profile);
    return <div style={{ marginTop: 80 }}>
        {/* <h2 className="f-56">{about.title}</h2>
        <div className="flex m-flex-column">
            <div className="w-200 h-200 m-w-300 m-h-300 m-m-auto">
                <GatsbyImage style={{ width: 'inherit', height: 'inherit' }} image={image} alt={about.profileAlt} />
            </div>
            <div className="w-666 pl-16 m-w-100">
                <p>{about.location}</p>
                <div className="inline">
                    {about.tags.map((tag, i) => <Tag key={`${tag}-${i}`} text={tag} />)}
                </div>
                {about.descriptions.map(description => <p key={description}>{description}</p>)}
            </div>
        </div> */}

        {/** Add your new classes down here */}
        <h2 className='mt-50'>Key practices</h2>
        {practices.map(({ title, number, descriptions}) => (
            <div key={title} className='flex flex-row justify-between flex-center mb-16 p-48 border-radius-16 '>
                <div className='w-30'>
                    <h2 className="pl-32">{number}</h2>
                    <h2 className="p-16 pl-32">{title}</h2>
                </div> 
                <div className='w-60 pl-32 pr-48'>
                    {descriptions.map(d => <p dangerouslySetInnerHTML={{__html: d}}></p>)}
                </div>
            </div>
        ))}
    </div>
}

export default AboutMe