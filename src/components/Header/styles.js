import { Link } from 'react-router'
import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
   0% {
      transform: scale(1, 1);
   }
   50% {
      opacity: 0.5;
   }
   100% {
      transform: scale(2);
      opacity: 0;
   }
`

export const Container = styled.div`
   width: 100%;
   background-color: #FBFBFB;
   position: fixed;
   top: 0;
   left: 0;
   ${(props) => props.$changeBackground && 'box-shadow: rgba(33, 35, 38, 0.1) 0px 3px 5px 2px'};
   transition: 200ms;
   z-index: 10;

   header {
      max-width: 1280px;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 0 auto;

      @media screen and (max-width: 600px) {
         padding: 0 1rem;
         gap: 1rem;
      }
   }

   button {
      border: 0;
      height: 25px;
      width: 25px;
      background-color: transparent;
      cursor: pointer;
      transition: 200ms;
      position: relative;

      div {
         position: absolute;
         top: 0;
         left: 0;
         height: 25px;
         width: 25px;
         border-radius: 30px;
         background-color: #17B8A6aa;
         animation: ${pulse} 1.5s infinite;
         z-index: -1;
      }

      &:hover {
         transform: scale(1.1);
      }

      &:active {
         opacity: 0.5;
      }
   }

   img {
      width: 100%;
      height: 100%;
   }

   nav.desktop {
      display: flex;
      align-items: center;
      gap: 2rem;

      @media screen and (max-width: 600px) {
         display: none;
      }
   }

   nav.mobile {
      display: none;

      @media screen and (max-width: 600px) {
         display: flex;
         flex-direction: column;
         gap: 0.3rem;
      }
   }
`

export const NavLink = styled(Link)`
   font-size: 1rem;
   font-weight: 400;
   color: #31363F;
   cursor: pointer;
   text-decoration: none;
   position: relative;
   padding-bottom: 2px;

   @media screen and (max-width: 600px) {
      font-size: 0.6rem;
   }

   &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: ${(props) => (props.$ishere ? '100%' : 0)};
      height: 2px;
      background-color: #31363F;
      transition: 200ms ease;

      @media screen and (max-width: 600px) {
         height: 0.5px;
      }
   }

   &:hover::after {
      width: 100%;
   }
`
