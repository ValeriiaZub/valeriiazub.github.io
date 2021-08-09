import * as React from 'react';
import PropTypes from "prop-types"
import LinkedinSvg from "../assets/linkedin.svg"
import MailSvg from "../assets/mail.svg"
import { Link } from 'gatsby';

const SocialLinks = ({ className, title, email, linkedin }) => (
    <div className={`${className ?? ""} flex flex-center`}>
        <Link to="/">{title ? <h4 className="p-16 bold" style={{ paddingLeft: 0 }}>{title}</h4> : null}</Link>
        <span className="pr-16"><a aria-label="Linkedin" rel="noopener" target="_black" href={linkedin}><LinkedinSvg /></a></span>
        <span className="pr-16"><a aria-label="EMail" href={`mailto:${email}`} ><MailSvg /></a></span>
    </div>
);

SocialLinks.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    email: PropTypes.string,
    linkedin: PropTypes.string,
}

export default SocialLinks;