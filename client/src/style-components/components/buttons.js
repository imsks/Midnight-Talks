import styled from "styled-components";
import {
  colorBlack,
  colorWhite,
  colorDanger,
  colorPrimary,
  colorShadow
} from "../constants";
// import { device } from "../base/mediaQuery";

// For Buttons
export const Button = styled.button`
  background-color: ${(props) => {
    const param = props.type;
    if (param === "primary" || param === "success") {
      return `${colorPrimary}`;
    } else if (param === "danger") {
      return `${colorDanger}`;
    } else if (param === "light") {
      return `${colorWhite}`;
    }
  }};

  color: ${(props) => {
    const param = props.type;
    if (param === "primary" || param === "success" || param === "danger") {
      return `${colorWhite}`;
    } else if (param === "light") {
      return `${colorBlack}`;
    }
  }};

  padding: ${(props) => {
    if (props.size === "large") {
      return "1.6rem 5rem";
    } else if (props.size === "medium") {
      return "1.3rem 3rem";
    } else if (props.size === "small") {
      return "1rem 1.5rem";
    } else {
      return props.padding;
    }
  }};

  margin: ${(props) => {
    return props.margin;
  }};

  font-size: ${(props) => {
    if (props.size === "large") {
      return "3rem";
    } else if (props.size === "medium" || props.size === "small") {
      return "2rem";
    } else {
      return props.fontSize;
    }
  }};

  width: ${(props) => {
    return props.width;
  }};

  height: ${(props) => {
    return props.height;
  }};

  text-decoration: none;
  box-shadow: 5px 5px 10px #bababa;
  transition: all 0.3s;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 700;
  border-radius: 5px;

  :hover {
    background-color: ${colorBlack};
    color: ${colorWhite};
    box-shadow: 1rem 1rem 3rem rgba(${colorShadow}, 0.5);
  }
`;
