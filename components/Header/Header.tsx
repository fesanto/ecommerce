import React from "react";
import Link from "next/link";
import styled from "styled-components";

const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-size: 12px;
`;

const TopHeaderMenu = styled.ul`
  display: flex;
  li {
    padding: 0 10px;
  }
`;
const BottomHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomHeaderItems = styled.div`
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
  }
`

// const Span = styled.span`
//   color: ${(props) => props.theme.color.c2a};
//   font-weight: 700;
//   font: ${(props) => props.theme.font.s4underline};
// `;

// const H3 = styled.h3`
//   color: ${(props) => props.theme.color.c4a};
//   font-size: 14px;
//   ${Span} {
//     color: yellow;
//   }
// `;
// const H4 = styled(H3)`
//   font-size: 12px;
//   color: #2222f8;
// `;

export const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <TopHeader>
          <TopHeaderMenu>
            <li>Chat with us</li>
            <li>+420 336 775 664</li>
            <li>info@freshnesecom.com</li>
          </TopHeaderMenu>
          <TopHeaderMenu>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
          </TopHeaderMenu>
        </TopHeader>
        <hr />
        <BottomHeader>
          <BottomHeaderItems><p>The E-commerce</p></BottomHeaderItems>
          <BottomHeaderItems>
            <p>All categories</p>
            <input type="text" placeholder="Search Products, categories ..."></input>
            <button>Search</button>
          </BottomHeaderItems>
          <BottomHeaderItems>
            <ul>
              <li>Perfil</li>
              <li>Carrinho</li>
            </ul>
          </BottomHeaderItems>
        </BottomHeader>
        {/* <H3>
          Logo E-commerce<Span>Sou um span dentro do H3</Span>
        </H3>
        <H4 as="h4">TESTE</H4>
        <Span>Ora, ora...</Span> */}
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/components">Components</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
