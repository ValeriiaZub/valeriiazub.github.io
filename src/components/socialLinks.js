import * as React from 'react';
import PropTypes from "prop-types"
import LinkedinSvg from "../assets/linkedin.svg"
import MailSvg from "../assets/mail.svg"

const SocialLinks = ({ className, title, email, linkedin }) => (
    <div className={`${className ?? ""} flex flex-center`}>
        {title ? <h4 className="p-16" style={{ paddingLeft: 0 }}>{title}</h4> : null}
        <span className="pr-16"><a href={`mailto:${email}`}><LinkedinSvg /></a></span>
        <span className="pr-16"><a target="_black" href={linkedin}><MailSvg /></a></span>
    </div>
);

SocialLinks.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    email: PropTypes.string,
    linkedin: PropTypes.string,
}

export default SocialLinks;