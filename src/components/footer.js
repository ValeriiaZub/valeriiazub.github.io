import * as React from 'react';
import PropTypes from 'prop-types';
import SocialLinks from './socialLinks';


const Footer = ({ footerTitles, email, linkedin }) => {
    return <footer className="footer">
        <div>
            {footerTitles.map(({ subTitle, title }, i) =>
                <div className={`${i === 0 ? 'w-60' : 'w-40'} inline m-w-100`} key={title}>
                    <h4 className="f-24">{title}</h4>
                    {(subTitle)
                        ? <p>{subTitle}</p>
                        : <SocialLinks className="m-m-0 m-pt-32" email={email} linkedin={linkedin} />}
                </div>
            )}
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