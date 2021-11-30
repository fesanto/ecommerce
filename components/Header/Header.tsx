import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const SPAN = styled.span`
color: pink;
`

const H3 = styled.h3` 
color: ${(props) => props.theme.color.c4a};
font-size: 14px;
${SPAN}{
  color: green;
}
`
const H4 = styled(H3)`
  font-size: 10px;
`


export const Header: React.FC = () => {
  return (
    <header>
      <H3>Logo E-commerce<SPAN>Hello</SPAN></H3>
      <H4 as="h4">TESTE</H4>
      <SPAN>Hello</SPAN>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/components">Components</Link></li>
      </ul>
    </header>
  );
};