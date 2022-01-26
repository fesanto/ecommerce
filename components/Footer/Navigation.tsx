import React from 'react';
import styled from "styled-components";

type FooterLinkType = {
  link: string,
  path: string,
}

type NavigationType = {
  footerLink: FooterLinkType[],
  title?: string,
}

const FooterNavigationBox = styled.div`
  font: 18px OpenSans, sans-serif;
`;

const FooterLink = styled.li`
  padding: 10px 0;
  list-style-type: none;
  font-size: 14px;
`;

export const Navigation: React.FC<NavigationType> = ({ footerLink, title = "Eita" }) => {
  const listItens = footerLink.map(({ link, path }) =>
    <FooterLink key={path}><a href={path}>{link}</a></FooterLink>
  );

  return (
    <FooterNavigationBox>
      {title && <h3>{title}</h3>}
      {listItens}
    </FooterNavigationBox>
  );
};

// como o título é obrigatório, essa é uma outra forma default além do que está como props mais acima
// Navigation.defaultProps = {
//   title: "Cocô"
// }

export default Navigation;


// COMENTARIO MANTIDO PARA ESTUDOS
// -title: ''
//         - link: [{
//           description: ''
//           path: ''
//         },{
//           description: ''
//           path: ''
//         },{
//           description: ''
//           path: ''
//         }]

//         <Navigation
//           title="joo"
//           link={{}}
//         />

/* <ul>
  <FooterLink>
    <a href={props.path} target="_blank">{props.description}</a>
  </FooterLink>
</ul> */


// const footerLink = [{
//   link: "About Us",
//   path: "/about",
// }, {
//   link: "Contact",
//   path: "/contact",
// }];
// const listItens = footerLink.map((fLink) => {
//   console.log(fLink)
//   return (
//     <li key={fLink.path}><a href={fLink.path}>{fLink.link}</a></li>
//   );
// }
// );