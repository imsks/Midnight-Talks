import styled from "styled-components"

export const BlogPageMain = styled.main`
  margin: ${props => {
    return props.margin
  }};
`

export const BlogPageContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${props => {
    return props.margin
  }};
`

export const BlogHeaderImage = styled.img`
  width: 50%;
  height: auto;

  margin: ${props => {
    return props.margin
  }};

  width: ${props => {
    return props.width
  }};
`

export const BlogHeaderHeading = styled.h1`
  margin: ${props => {
    return props.margin
  }};

  width: ${props => {
    return props.width
  }};

  font-size: ${props => {
    return props.fontSize
  }};
`

export const BlogContentSection = styled.section`
  margin: ${props => {
    return props.margin
  }};

  width: ${props => {
    return props.width
  }};
`
