import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Tag from './tag';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BoxImage = ({ image, title, description, tags, link }) => (
    <Link to={link}>
        <div className="background relative z-index-1 h-400 pr-32 pl-32 mb-50 border-radius-16 flex m-flex-column m-pt-0">
            <div className="w-400 h-400 z-index--1 m-w-40 m-w-100 m-box-image">
                <GatsbyImage style={{ height: 'inherit' }} alt={description} image={getImage(image)} />
            </div>
            <div className="p-16 h-100 w-500 ml-40 mt-16 absolute z-index--1 flex flex-center m-w-50 m-relative m-w-100 m-m-0">
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
