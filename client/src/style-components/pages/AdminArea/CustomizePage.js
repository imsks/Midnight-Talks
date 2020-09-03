import styled from "styled-components"

export const CustomizeBlogMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: ${props => {
    return props.margin
  }};

  height: ${props => {
    return props.height
  }};
`

export const BlogContentSection = styled.section`
  margin: ${props => {
    return props.margin
  }};

  width: ${props => {
    return props.width
  }};

  img {
    max-width: 114.2rem;
    max-height: 28.5rem;
  }
`

export const BlogCustomizeSection = styled.section`
  margin: ${props => {
    return props.margin
  }};

  width: ${props => {
    return props.width
  }};
`

export const BlogHeaderImagePreview = styled.section`
  margin: ${props => {
    return props.margin
  }};

  width: ${props => {
    return props.width
  }};

  img {
    max-width: 114.2rem;
    max-height: 28.5rem;
  }
`

export const BlogPublished = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: ${props => {
    return props.margin
  }};

  width: ${props => {
    return props.width
  }};
`
