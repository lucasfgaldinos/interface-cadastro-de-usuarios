import styled from 'styled-components'

export const Background = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: #000000ee;
   position: fixed;
   inset: 0;
   z-index: 10;
   display: ${(props) => (props.$showModalUpdateUser ? 'flex' : 'none')};
   align-items: center;
   justify-content: center;
`

export const Container = styled.div`
   width: 400px;
   height: fit-content;
   padding: 1rem;
   background-color: #FBFBFB;
   border-radius: 1rem;
   display: flex;
   flex-direction: column;
   justify-content: center;

   p {
      font-size: 1rem;
      text-align: center;
      position: relative;
      margin-bottom: 1rem;

      &::after {
         content: '';
         position: absolute;
         width: 10%;
         height: 2px;
         left: 50%;
         bottom: 0;
         transform: translateX(-50%);
         background-color: #17B8A6;
      }
   }

   form {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 400px;

      label {
         display: flex;
         flex-direction: column;
         font-size: 1rem;
         color: #17B8A6;
         margin-bottom: 0.5rem;

         input {
            height: 2rem;
            font-size: 1rem;
            border: 1px solid transparent;
            border-radius: 2px;
            outline: none;
            background-color: #31363F11;
            padding: 0 0.5rem;
            box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
            
            &:focus {
               border: 1px solid #17B8A6;
            }
         }

         input[type="number"] {
            width: 80px;
         }

         div {
            display: flex;
            padding: 2px;
            height: 1.5rem;
            width: 100%;
         }
         
         span {
            font-size: 0.75rem;
            color: #FF0033;
         }
      }

      .button-div {
         margin: 0 auto;
         display: flex;
         flex-direction: column;
         align-items: center;

         .cancel-button {
            background-color: transparent;
            margin-top: 1rem;
            border: none;
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
      }
   }
`
