import * as React from 'react';
import Layout from '../components/layout';
import { MDXProvider } from "@mdx-js/react"
import { graphql, Link } from "gatsby";
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// All of the svgs that we'll hopefully ever need
import ArrowLeft from '../assets/arrow_left.svg';
import ArrowRight from '../assets/arrow_right.svg';
import ArrowDown from '../assets/arrow_down.svg';
import AudioVolume from '../assets/audio-volume-large.svg';
import CarHandover from '../assets/car-handover-large.svg';
import Car from '../assets/car-large.svg';
import ClimateAuto from '../assets/climate-auto-large.svg';
import Code from '../assets/code-large.svg';
import ConnectKey from '../assets/connect-key-large.svg';
import CirclePhone from '../assets/circle-phone.svg';
import Idea from '../assets/idea-large.svg';
import IndicatorsDown from '../assets/indicators-down.svg';
import IndicatorsUpDown from '../assets/indicators-up-down.svg';
import InteriorSeat from '../assets/interior-seat.svg';
import MobilePhone from '../assets/mobile-phone.svg';
import Settings from '../assets/settings.svg';
import ValetParking from '../assets/valet-parking.svg';
import VolumeDown from '../assets/volume_down.svg';
import VolumeUp from '../assets/volume_up.svg';

const shortcodes = {
    Link,
    GatsbyImage,
    ArrowLeft,
    ArrowRight,
    ArrowDown,
    AudioVolume,
    CarHandover,
    ClimateAuto,
    Code,
    Car,
    ConnectKey,
    CirclePhone,
    Idea,
    IndicatorsDown,
    IndicatorsUpDown,
    InteriorSeat,
    MobilePhone,
    Settings,
    ValetParking,
    VolumeDown,
    VolumeUp,
}

const Post = ({ data }) => {
    const { images } = data.mdx.frontmatter;
    const preparedImages = images.reduce((obj, image) => {
        const addition = image ? { [image.name]: getImage(image) } : {}
        return ({
            ...obj,
            ...addition
        });
    }, {});
    return <Layout>
        {/* <GatsbyImage alt="Landing Picture" image={preparedImages.home} /> */}
        <MDXProvider
            components={shortcodes}
        >
            <MDXRenderer frontmatter={data.mdx.frontmatter} {...preparedImages}>
                {data.mdx.body}
            </MDXRenderer>
        </MDXProvider>
        <section>
            <h2>Discovere more of my work</h2>
        </section>
    </Layout>
}

export const query = graphql`
    query($id: String!) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                images {
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                    name
                }
            }
        }
    }
`;

export default Post