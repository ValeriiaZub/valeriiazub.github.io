import * as React from 'react';
import PropTypes from "prop-types"
import LinkedinSvg from "../assets/linkedin.svg"
import MailSvg from "../assets/mail.svg"

const SocialLinks = ({ title, email, linkedin }) => (
    <div className="flex flex-center">
        <h4 className="p-16" style={{ paddingLeft: 0 }}>{title ?? ""}</h4>
        <p className="p-16"><a href={`mailto:${email}`}><LinkedinSvg /></a></p>
        <p className="p-16"><a target="_black" href={linkedin}><MailSvg /></a></p>
    </div>
);

SocialLinks.propTypes = {
    title: PropTypes.string,
    email: PropTypes.string,
    linkedin: PropTypes.string,
}

export default SocialLinks;