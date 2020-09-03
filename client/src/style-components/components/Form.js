import styled from "styled-components"
import { colorBlack, colorWhite, colorPrimary } from "../constants"

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;

  width: ${props => {
    return props.width
  }};
`

export const FormInput = styled.input`
  font-size: 3rem;
  font-family: inherit;
  color: ${colorBlack};
  background-color: ${colorWhite};
  transition: all 1s;

  border: ${props => {
    if (props.type === "text") {
      return `1px solid ${colorBlack}`
    }
  }};

  padding: ${props => {
    return props.padding
  }};

  margin: ${props => {
    return props.margin
  }};

  width: ${props => {
    return props.width
  }};

  height: ${props => {
    return props.height
  }};

  display: ${props => {
    if (props.type === "file") {
      return "none";
    }
  }};

  ::-webkit-input-placeholder {
    color: ${colorBlack};
    font-weight: 400;
    font-size: 2rem;
  }
`
export const FormUploadImageDiv = styled.div`
  display: flex;
  flex-direction: row;

  width: ${props => {
    return props.width
  }};
`

export const FormUploadImageInput = styled.div`
  width: ${props => {
    return props.width
  }};
`

export const FormUploadImageLabel = styled.label`
  padding: ${props => {
    return props.padding
  }};

  margin: ${props => {
    return props.margin
  }};

  width: ${props => {
    return props.width
  }};

  display: inline-block;
  cursor: pointer;
  color: ${colorWhite};
  background-color: ${colorPrimary};
  font-size: 2rem;
  font-size: ${(props) => {
    if (props.fontSize) {
      return props.fontSize;
    }  else {
      return "3rem";
    }
  }};

  font-weight: 600;
  transition: all 0.3s;
  text-align: center;
  box-shadow: 5px 5px 10px #bababa;

  :hover {
    background-color: ${colorBlack};
    color: ${colorWhite};
    box-shadow: 5px 5px 10px #bababa;
  }
`
