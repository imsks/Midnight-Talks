import styled from "styled-components"
import { colorWhite, colorBlack, colorPrimary } from "../constants"

export const ToastContainer = styled.div`
  position: absolute;
  left: 40%;
  bottom: 1rem;
  display: block;
  padding: 1rem 3rem;
  background-color: ${colorPrimary};
  color: ${colorWhite};
  font-size: 2rem;
  font-weight: 700;
  z-index: 100;
  transition: 0.5s all;
  box-shadow: 1px 1px 10px #6e6e6e;
`
