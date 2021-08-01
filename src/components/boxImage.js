import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Tag from './tag';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BoxImage = ({ image, title, description, tags, link }) => (
    <Link to={link}>
        <div className="box flex p-16">
            <div className="box--image">
                <GatsbyImage alt={description} image={getImage(image)} />
            </div>
            <div className="p-16 box--content flex flex-center">
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
