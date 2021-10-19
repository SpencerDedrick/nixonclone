import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faPinterest,
  faInstagramSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

//FOOTER CONSTANTS
const FOOTER_LINKS_1 = {
  title: "Company",
  links: ["About Us", "Work Here", "Team", "Stories", "Affiliate"],
};

const FOOTER_LINKS_2 = {
  title: "Customer Support",
  links: [
    "Customer Service",
    "Needs a Repair",
    "Warranty",
    "FAQS",
    "Contact Us",
  ],
};

const FOOTER_LINKS_3 = {
  title: "Orders & Returns",
  links: ["Shipping", "Returns", "Promotions"],
};

const FOOTER_SOCIAL_LINKS = [
  {
    icon: faInstagramSquare,
    link: "https://www.instagram.com/",
  },
  {
    icon: faPinterest,
    link: "https://www.pinterest.com/",
  },
  {
    icon: faFacebookF,
    link: "https://www.facebook.com/",
  },
  {
    icon: faYoutube,
    link: "https://www.youtube.com/",
  },
  {
    icon: faTwitter,
    link: "https://twitter.com/",
  },
];

const FOOTER_LEGAL_LINKS = [
  { text: "Privacy Policy", link: "#" },
  { text: "Terms and Conditions", link: "#" },
  { text: "Store/Dealer Locator", link: "#" },
  { text: "Unauthorized Dealers Alert", link: "#" },
  { text: "Social Responsibility", link: "#" },
  { text: "Accessibility", link: "#" },
];

//FOOTER STYLES
//MOBILE FIRST
//MOBILE AND SMALL STYLES(screen-width <= 768PX)
const FooterStyled = styled.div`
  display: grid;
  padding: 0px 40px;
  width: 100vw;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  left: 0;
  right: 0;
  bottom: 0;
  margin-top: 20px;

  /* FOOTER NAV LINK STYLES */
  .footer__nav {
    display: grid;
    width: 100%;
    grid-template-rows: repeat(2, 50%);
    grid-template-columns: repeat(2, 50%);
    justify-items: start;
    row-gap: 40px;

    .footer__nav-heading {
      color: #232323;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .footer__nav-link {
      text-decoration: none;
      font-size: 0.8rem;
      color: #7a7a7a;
      padding: 8px 0;

      &:hover {
        color: black;
      }
    }

    .footer__nav-link-container {
      display: flex;
      flex-direction: column;
    }

    hr {
      width: 50px;
      background-color: #232323;
      border: 1px solid #232323;
      margin-bottom: 5px;
    }
  }

  /* FOOTER SOCIAL LINK STYLES */
  .footer__social {
    padding: 30px 0px;
    width: 100%;

    .footer__social-container {
      display: flex;
      justify-content: space-between;
      max-width: 200px;
      margin: auto;
    }

    .footer__social-icon {
      color: #232323;
      font-size: 1.5rem;

      &:hover {
        color: #7a7a7a;
      }
    }
  }

  /* FOOTER LEGAL STYLES */
  .footer__legal {
    text-align: center;
    margin-bottom: 10px;

    .footer__legal-link {
      font-size: 0.7rem;
      color: #232323;
      text-decoration: none;
      text-align: center;
    }

    span {
      margin: 10px;
    }
  }

  /* RESPONSIVE & OTHER STYLES */

  .footer__home-button {
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: none;
    color: #232323;
    max-width: auto;

    &:hover {
      color: #7a7a7a;
    }
  }

  hr {
    margin: 10px 0;
  }

  /* TABLET AND MEDIUM STYLES (screen-width >= 768PX)*/
  @media only screen and (min-width: 768px) {
    .footer__nav {
      display: flex;
      justify-content: space-between;
      max-width: 600px;
    }

    .footer__social {
      justify-content: space-between;
      max-width: 600px;

      .footer__social-container {
        width: 200px;
        margin: 0;
      }
    }
  }

  /* DESKTOP AND LARGE STYLES (screen-width >= 1024PX)*/
  @media only screen and (min-width: 1024px) {
    .footer__nav {
      max-width: 800px;
      margin-left: 0px;
    }
    .footer__social {
      width: 100%;
      max-width: 100%;

      justify-content: space-between;

      .footer__social-container {
        max-width: 250px;
        margin: 0;
      }

      .footer__social-icon {
        font-size: 1.6rem;
      }
    }

    .footer__legal {
      width: 100%;
      text-align: end;
    }

    .tablet-hidden {
      display: none;
    }
  }

  /* XL STYLES (screen-width >= 1280PX) */
  @media only screen and (min-width: 1280px) {
  }

  /* 2XL STYLES (screen-width >= 1536PX) */
  @media only screen and (min-width: 1536px) {
  }
`;

function FooterNavLinks(props) {
  return (
    <container className="footer__nav-links-container">
      <p className="footer__nav-heading">{props.title}</p>
      <hr />
      <div className="footer__nav-link-container">
        {props.links.map((link) => {
          return (
            <Link
              className="footer__nav-link"
              to={`/${link.replace(/\s/g, "")}`}
            >
              {link}
            </Link>
          );
        })}
        <div></div>
      </div>
    </container>
  );
}

function FooterSocialLinks(props) {
  return (
    <container className={"footer__social-container"}>
      {FOOTER_SOCIAL_LINKS.map((social) => {
        return (
          <a href={social.link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={social.icon}
              className="footer__social-icon"
            />
          </a>
        );
      })}
    </container>
  );
}

function FooterLegalLinks() {
  return (
    <container className="footer__legal-container">
      {FOOTER_LEGAL_LINKS.map((legal) => {
        if (legal !== FOOTER_LEGAL_LINKS[FOOTER_LEGAL_LINKS.length - 1]) {
          return (
            <>
              <a href={legal.link} className="footer__legal-link">
                {legal.text}
              </a>
              <span>|</span>
            </>
          );
        } else {
          return (
            <>
              <a href={legal.link} className="footer__legal-link">
                {legal.text}
              </a>
            </>
          );
        }
      })}
    </container>
  );
}

function Footer() {
  return (
    <FooterStyled className="footer">
      <div className="footer__social hidden md:flex">
        <Link to="/" className="footer__home-button mobile-hidden">
          Home
        </Link>
        <FooterSocialLinks />
      </div>
      <div className="footer__nav">
        <FooterNavLinks
          title={FOOTER_LINKS_1.title}
          links={FOOTER_LINKS_1.links}
        />
        <FooterNavLinks
          title={FOOTER_LINKS_2.title}
          links={FOOTER_LINKS_2.links}
        />
        <FooterNavLinks
          title={FOOTER_LINKS_3.title}
          links={FOOTER_LINKS_3.links}
        />
      </div>
      <hr />
      <div className="footer__social md:hidden">
        <FooterSocialLinks />
      </div>
      <div className="footer__legal">
        <FooterLegalLinks />
      </div>
    </FooterStyled>
  );
}

export default Footer;
