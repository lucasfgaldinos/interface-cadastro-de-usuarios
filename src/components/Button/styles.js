import styled from 'styled-components'

export const Container = styled.button`
   padding: 1rem 2rem;
   font-size: 1rem;
   font-weight: 500;
   border-radius: 5rem;
   border: 0;
   background-color: #17B8A6AA;
   color: #31363F;
   cursor: pointer;
   transition: all 200ms;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.5rem;
   margin: 1rem 0;
   width: fit-content;

   @media screen and (max-width: 600px) {
      font-size: 0.6rem;
      padding: 0.5rem 0.9rem;
   }

   &:hover {
      background-color: #17B8A6;
   }

   &:active {
      background-color: #17B8A6CC;
   }
`
