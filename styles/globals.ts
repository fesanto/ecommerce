import { createGlobalStyle } from "styled-components";
import { themeDefault } from "../theme";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul { 
  list-style-type: none;
}

a {
  text-decoration: none;
  color: ${(props) => props.theme.color.c2a};
}

.container {
  margin: 20px;
}
`

