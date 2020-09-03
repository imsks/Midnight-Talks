import styled from "styled-components"

export const AdminMain = styled.main`
  margin: ${props => {
    return props.margin
  }};
`

export const AdminMainHeading = styled.div`
  margin: ${props => {
    return props.margin
  }};
`
export const AdminActions = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: ${props => {
    return props.margin
  }};
`

export const AdminActionButtons = styled.section`
  width: 100%;
  display: grid;
  gap: 0.5rem;
  justify-items: baseline;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  margin: ${props => {
    return props.margin
  }};
`

export const AdminBeforeAuthStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${props => {
    return props.padding
  }};
`

export const MyBlogSection = styled.div`
  width: ${props => {
    return props.width
  }};

  margin: ${props => {
    return props.margin
  }};
`

export const BlogLink = styled.a`
  text-decoration: none;
  width: ${props => {
    return props.width
  }};
`
