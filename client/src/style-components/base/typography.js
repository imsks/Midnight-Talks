import styled from "styled-components";
import { device } from "./mediaQuery";
// import { colorBlack } from '../constants';

export const HeadingPrimary = styled.h1`
  display: block;
  text-decoration: none;
  transition: 0.3s all;
  overflow: hidden;

  margin: ${(props) => {
    return props.margin;
  }};

  height: ${(props) => {
    return props.height;
  }};

  line-height: ${(props) => {
    return props.lineHeight;
  }};

  color: ${({ theme }) => theme.text};

  font-size: ${(props) => {
    return props.fontSize !== undefined ? props.fontSize : "7rem";
  }};

  font-weight: ${(props) => {
    return props.fontWeight !== undefined ? props.fontWeight : "500";
  }};

  text-align: ${(props) => {
    return props.align;
  }};

  @media ${device.tabLand} {
    font-size: 4.5rem;
  }

  @media ${device.tabPort} {
    font-size: 3.5em;
  }

  @media ${device.phone} {
    font-size: 3rem;
  }
`;

export const HeadingSecondary = styled.h2`
  display: block;
  transition: 0.3s all;

  margin: ${(props) => {
    return props.margin;
  }};

  color: ${({ theme }) => theme.text};

  font-size: ${(props) => {
    return props.fontSize !== undefined ? props.fontSize : "4.5rem";
  }};

  font-weight: ${(props) => {
    return props.fontWeight !== undefined ? props.fontWeight : "500";
  }};

  @media ${device.tabLand} {
    font-size: 4rem;
  }

  @media ${device.tabPort} {
    font-size: 3em;
  }

  @media ${device.phone} {
    font-size: 2.5rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 3rem;
  display: inline-block;
  transition: 0.3s all;

  color: ${({ theme }) => theme.text};

  font-size: ${(props) => {
    return props.fontSize;
  }};

  @media ${device.tabLand} {
    font-size: 2.5rem;
  }

  @media ${device.tabPort} {
    font-size: 2em;
  }
`;
