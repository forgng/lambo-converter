import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const IconFacebook = () => (
  <svg version="1.1" id="Layer_1" viewBox="0 0 40 40">
    <g>
      <path
        d="M29.1,21.9h-2.8V20c0-0.7,0.5-0.9,0.8-0.9s2,0,2,0V16h-2.7c-3,0-3.7,2.3-3.7,3.7v2h-1.8V25h1.8
      c0,4,0,8.9,0,8.9h3.7c0,0,0-4.9,0-8.9h2.5L29.1,21.9z"
        transform="translate(-5, -4)"
      />
    </g>
  </svg>
);

const IconTwitter = () => (
  <svg viewBox="0 0 35 35">
    <path
      d="M33.5,18.9c-0.7,0.3-1.4,0.5-2.1,0.6c0.8-0.5,1.3-1.3,1.6-2.2c-0.7,0.5-1.5,0.8-2.3,1
				C30.1,17.5,29.1,17,28,17c-2,0-3.7,1.8-3.7,4c0,0.3,0,0.6,0.1,0.9c-3-0.2-5.8-1.7-7.6-4.1c-0.3,0.6-0.5,1.3-0.5,2
				c0,1.4,0.6,2.6,1.6,3.3c-0.6,0-1.2-0.2-1.7-0.5c0,0,0,0,0,0.1c0,1.9,1.3,3.5,2.9,3.9c-0.3,0.1-0.6,0.1-1,0.1
				c-0.2,0-0.5,0-0.7-0.1c0.5,1.6,1.8,2.7,3.4,2.7C19.5,30.4,18,31,16.2,31c-0.3,0-0.6,0-0.9-0.1c1.6,1.1,3.5,1.8,5.6,1.8
        c6.7,0,10.4-6,10.4-11.2c0-0.2,0-0.3,0-0.5C32.4,20.4,33.1,19.7,33.5,18.9z"
      transform="translate(-6, -6)"
    />
  </svg>
);

// const SocialIcon = ({ social, link }) => {
//   const selectSocial = () => {
//     switch (social) {
//       case 'facebook':
//         return (
//           <Link to={link}>
//             <SocialIconWrapper facebook>
//               <IconFacebook />
//             </SocialIconWrapper>
//           </Link>
//         );
//       case 'twitter':
//         return (
//           <Link to={link}>
//             <SocialIconWrapper twitter>
//               <IconTwitter />
//             </SocialIconWrapper>
//           </Link>
//         );
//       case 'linkedin':
//         return (
//           <Link to={link}>
//             <SocialIconWrapper linkedin>
//               <IconLinkedin />
//             </SocialIconWrapper>
//           </Link>
//         );
//       case 'medium':
//         return (
//           <Link to={link}>
//             <SocialIconWrapper medium>
//               <IconMedium />
//             </SocialIconWrapper>
//           </Link>
//         );
//       case 'github':
//         return (
//           <Link to={link}>
//             <SocialIconWrapper github>
//               <IconGithub />
//             </SocialIconWrapper>
//           </Link>
//         );
//       case 'abitcompany':
//         return (
//           <Link to={link}>
//             <SocialIconWrapper abitcompany>
//               <IconAbitCompany />
//             </SocialIconWrapper>
//           </Link>
//         );
//       default:
//         return <div />;
//     }
//   };
//   return <div>{selectSocial()}</div>;
// };

const ShareIcon = ({ social, handleClick }) => {
  const selectSocial = () => {
    switch (social) {
      case 'facebook':
        return (
          <SocialIconWrapper share facebook onClick={handleClick}>
            <IconFacebook />
          </SocialIconWrapper>
        );
      case 'twitter':
        return (
          <SocialIconWrapper share twitter onClick={handleClick}>
            <IconTwitter />
          </SocialIconWrapper>
        );
      default:
        return <div />;
    }
  };
  return <div>{selectSocial()}</div>;
};

ShareIcon.propTypes = {
  social: PropTypes.string,
  handleClick: PropTypes.func,
};

const SocialIconWrapper = styled.div`
  height: 40px;
  width: 40px;
  transform: rotate(45deg);
  ${props =>
    props.facebook &&
    css`
      background-color: #3b5998;
    `};
  ${props =>
    props.twitter &&
    css`
      background-color: #1da1f2;
    `};
  ${props =>
    props.linkedin &&
    css`
      background-color: #0077b5;
    `};
  ${props =>
    props.medium &&
    css`
      background-color: #000;
    `};
  ${props =>
    props.github &&
    css`
      background-color: #000;
    `};
  ${props =>
    props.abitcompany &&
    css`
      background-color: #0c35fb;
    `};

  ${props =>
    props.share &&
    css`
      height: 30px;
      width: 30px;
      @media screen and (max-width: 600px) {
        height: 30px;
        width: 30px;
      }
      @media screen and (max-width: 450px) {
        height: 20px;
        width: 20px;
      }
    `};
  border-radius: 6px;
  transition: all 1s;
  margin: 0 15px;
  position: relative;
  svg {
    transition: all 1s;
    transform: rotate(-45deg);
    fill: white;
  }
  &:hover {
    cursor: pointer;
    transform: rotate(360deg);
    svg {
      transform: rotate(-360deg);
    }
  }
`;

export { IconTwitter, IconFacebook, ShareIcon };
