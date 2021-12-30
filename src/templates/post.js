import * as React from 'react';
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react"
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Hero from '../components/hero';
import Layout from '../components/layout';

// All off the personal components imported
import Grid from '../components/grid'
import Overflow from '../components/overflow'
import BlockQuote from '../components/blockquote';

// All of the svgs that I'll hopefully ever need
import ArrowLeft from '../assets/arrow_left.svg';
import UserFlowMvp from '../assets/user-flow-mvp.svg';
import UserFlowTarget from '../assets/user-flow-target.svg';
import ArrowRight from '../assets/arrow_right.svg';
import ArrowDown from '../assets/arrow_down.svg';
import AudioVolume from '../assets/audio-volume-large.svg';
import CarHandover from '../assets/car-handover-large.svg';
import Car from '../assets/car-large.svg';
import ClimateAuto from '../assets/climate-auto-large.svg';
import Code from '../assets/code-large.svg';
import ConnectKey from '../assets/connect-key-large.svg';
import CirclePhone from '../assets/circle-phone.svg';
import GccFlowchart from '../assets/flowChart.svg';
import Idea from '../assets/idea-large.svg';
import IndicatorsDown from '../assets/indicators-down.svg';
import IndicatorsUpDown from '../assets/indicators-up-down.svg';
import InteriorSeat from '../assets/interior-seat.svg';
import MobilePhone from '../assets/mobile-phone.svg';
import Lightbulb from '../assets/lightbulb.svg';
import Settings from '../assets/settings.svg';
import People from '../assets/people.svg';
import Paper from '../assets/paper.svg'; 
import Research from '../assets/researchIcon.svg'; 
import Wireframe from '../assets/wireframeIcon.svg'; 
import ValetParking from '../assets/valet-parking.svg';
import VolumeDown from '../assets/volume_down.svg';
import VolumeUp from '../assets/volume_up.svg';
import BoxImage from '../components/boxImage';
import Seo from '../components/seo';

const shortcodes = {
    Link,
    UserFlowMvp,
    UserFlowTarget,
    Grid,
    Overflow,
    BlockQuote,
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
    GccFlowchart,
    Idea,
    IndicatorsDown,
    IndicatorsUpDown,
    InteriorSeat,
    Lightbulb,
    MobilePhone,
    Settings,
    People,
    Paper,
    Research,
    Wireframe,
    ValetParking,
    VolumeDown,
    VolumeUp,
}

const Post = ({ data }) => {
    const { images, subTitle, title } = data.mdx.frontmatter;
    const preparedImages = images.reduce((obj, image) => {
        const addition = image ? { [image.name]: getImage(image) } : {}
        return ({
            ...obj,
            ...addition
        });
    }, {});
    return <Layout>
        <Seo title={title} />
        <Hero title={title} subText={subTitle} />
        <div className="markdown">
            <MDXProvider
                components={shortcodes}
            >
                <MDXRenderer frontmatter={data.mdx.frontmatter} {...preparedImages}>
                    {data.mdx.body}
                </MDXRenderer>
            </MDXProvider>
        </div>
        <section>
            <h2 className="f-56 mt-100">Discover more of my work</h2>
            <BoxImage
                image={data.workYaml.work.imageSrc}
                title={data.workYaml.work.title}
                background={data.workYaml.work.backgroundColor}
                description={data.workYaml.work.description}
                tags={data.workYaml.work.tags}
                link={`/${data.workYaml.work.link}`} 
            />
        </section>
    </Layout>
}

export const query = graphql`
    query($id: String!, $company: String!) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                subTitle
                title
                images {
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                    name
                }
            }
        }
        workYaml(work: {readMore: {eq: $company}}) {
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
                readMore
                backgroundColor
            }
        }
    }
`;

export default Post