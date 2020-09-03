import styled from "styled-components"
import { colorWhite } from "../constants"

// Top Navbar
export const NavbarHead = styled.nav`
  box-shadow: 0 2.5rem 2rem rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  background: ${({ theme }) => theme.body};
`

export const Logo = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 3rem;
  font-weight: 600;
  transition: 0.3s all;

  margin: ${props => {
    return props.margin
  }};
`

export const CreateBlogActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => {
    return props.padding
  }};
`

export const WrapNavButtons = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
