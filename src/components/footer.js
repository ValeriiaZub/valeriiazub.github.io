import * as React from 'react';
import PropTypes from 'prop-types';
import SocialLinks from './socialLinks';


const Footer = ({ footerTitles, email, linkedin }) => {
    return <footer>
        <div>
            {footerTitles.map(({ subTitle, title }) =>
                <div className="w-50 inline" key={title}>
                    <h4>{title}</h4>
                    <p>{subTitle}</p>
                </div>
            )}
        </div>
        <div>
            <SocialLinks email={email} linkedin={linkedin} />
        </div>
    </footer>
}

Footer.propTypes = {
    footerTitles: PropTypes.arrayOf(PropTypes.shape({
        subTitle: PropTypes.string,
        title: PropTypes.string
    })),
    email: PropTypes.string,
    linkedin: PropTypes.string,
}



export default Footer;