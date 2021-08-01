import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Tag from './tag';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BoxImage = ({ image, title, description, tags, link }) => (
    <Link to={link}>
        <div className="background relative z-index-1 h-400 pr-32 pl-32 mb-50 border-radius-16 flex">
            <div className="w-400 h-400 z-index--1">
                <GatsbyImage style={{ width: 'inherit', height: 'inherit' }} alt={description} image={getImage(image)} />
            </div>
            <div className="p-16 w-500 ml-40 mt-16 absolute z-index--1 flex flex-center">
                <div>
                    <h3 className="f-24">{title}</h3>
                    <p>{description}</p>
                    <div className="inline">
                        {tags.map(t => <Tag key={t} text={t} />)}
                    </div>
                </div>
            </div>
        </div>
    </Link>
)

BoxImage.propTypes = {
    image: PropTypes.any,
    title: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    link: PropTypes.string
}

export default BoxImage
