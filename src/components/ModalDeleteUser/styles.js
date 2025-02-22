import styled from 'styled-components'

export const Background = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: #000000ee;
   position: fixed;
   inset: 0;
   z-index: 10;
   display: ${(props) => (props.$showModalDeleteUser ? 'flex' : 'none')};
   align-items: center;
   justify-content: center;
`

export const Container = styled.div`
   width: 450px;
   height: fit-content;
   padding: 1rem;
   background-color: #FBFBFB;
   border-radius: 1rem;
   display: flex;
   flex-direction: column;
   justify-content: center;

   p {
      font-size: 0.9rem;
      font-weight: 400;
   }

   div {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      gap: 2rem;

      button {
         background-color: transparent;
         border: 0;
         cursor: pointer;
         position: relative;

         &::after {
            content: '';
            height: 1px;
            width: 0;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: #000000;
            transition: 200ms;
         }

         &:hover::after {
            width: 100%;
         }
      }
   
      button.delete {
         color: red;

         &::after {
            background-color: red;
         }
      }
   }

`
