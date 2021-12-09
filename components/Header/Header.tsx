import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Span = styled.span`
  color: ${(props) => props.theme.color.c2a};
  font-weight: 700;
  font: ${(props) => props.theme.font.s4underline};
`;

const H3 = styled.h3`
  color: ${(props) => props.theme.color.c4a};
  font-size: 14px;
  ${Span} {
    color: yellow;
  }
`;
const H4 = styled(H3)`
  font-size: 12px;
  color: #2222f8;
`;

export const Header: React.FC = () => {
  return (
    <header>
      <H3>
        Logo E-commerce<Span>Sou um span dentro do H3</Span>
      </H3>
      <H4 as="h4">TESTE</H4>
      <Span>Ora, ora...</Span>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/components">Components</Link>
        </li>
      </ul>
    </header>
  );
};
