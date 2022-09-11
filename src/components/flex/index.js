import styled, { css } from "styled-components";
import is from "styled-is";

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
  width: ${(props) => props.width || "100%"};
  gap: ${(props) => props.gap || "16px"};

  ${is("fullHeight")`
    height: 100vh;
  `};
  ${is("flex")`
    flex: ${(props) => props.flex};
  `};

  /***************************** justify-content *****************************/
  ${is("justifyEnd")`
    justify-content: flex-end;
  `};
  ${is("justifyCenter")`
    justify-content: center;
  `};
  ${is("justifyBetween")`
    justify-content: space-between;
  `};
  ${is("justifyAround")`
    justify-content: space-around;
  `};

  /****************************** align-item ******************************/

  ${is("alignEnd")`
    align-items: flex-end;
  `};
  ${is("alignCenter")`
    align-items: center;
  `};
  ${is("alignBaseline")`
    align-items: baseline;
  `};
`;

export default Flex;
