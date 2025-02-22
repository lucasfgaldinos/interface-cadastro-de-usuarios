import styled from 'styled-components'

export const Container = styled.div`
   padding: 6rem 2rem;

   h2 {
      margin-top: 2rem;
      font-size: 2.5rem;
      font-weight: 600;
      text-align: center;
      margin-bottom: 2rem;
      animation: trackingInExpand 1.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
   
      @keyframes trackingInExpand {
         0% {
            letter-spacing: -0.5em;
            opacity: 0;
         }
         40% {
            
         }
         100% {
            opacity: 1;
         }
      }

      @media screen and (max-width: 600px) {
         font-size: 1.5rem;
      }
   }

   @media screen and (max-width: 600px) {
      padding: 3rem 1rem;
   }

   .div-button-list-users {
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;
   }
`

export const SearchUserContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 1rem;

   label {
      width: 400px;
      display: flex;
      flex-direction: column;
      font-size: 1rem;
      color: #17B8A6;

      @media screen and (max-width: 500px) {
         width: 90%;
      }

      div {
         display: flex;
         justify-content: space-between;
         gap: 1rem;

         input {
            width: 100%;
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

            @media screen and (max-width: 600px) {
               height: 1.5rem;
               font-size: 0.6rem;
            }
         }

         button {
            width: fit-content;
            height: 2rem;
            padding: 0 0.3rem;
            background-color: #31363F11;
            border: 1px solid transparent;
            border-radius: 2px;
            cursor: pointer;
            transition: 100ms;
            box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
            font-size: 1rem;
            color: #17B8A6;

            &:hover {
               border: 1px solid #17B8A6;
            }

            &:active {
               background-color: #17B8A666;
            }

            @media screen and (max-width: 600px) {
               font-size: 0.6rem;
               height: 1.5rem;
            }
         }
      }

      @media screen and (max-width: 600px) {
         font-size: 0.6rem;
      }
   }
`

export const Content = styled.div`
   width: 100%;
   display: flex;
   padding: 2rem;
   margin: 6rem auto;

   ul {
      list-style: none;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      width: 100%;
      max-width: 1200px;
      padding: 1rem;
      margin: 0 auto;
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
      border-radius: 5px;
      background-color: #e0e0e0;

      li {
         font-size: 0.9rem;
         width: 100%;
         height: fit-content;
         padding: 0.5rem;
         background-color: #FBFBFB;
         border-radius: 3px;
         box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
         overflow: auto;
         transition: 100ms ease;

         @media screen and (max-width: 600px) {
            font-size: 0.7rem;
         }
         
         span {
            font-weight: 600;
         }

         .buttons-div {
            margin-top: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;

            button {
               color: #2255FF;
               border: 0;
               width: fit-content;
               height: fit-content;
               background-color: transparent;
               cursor: pointer;
               margin-top: 0.3rem;
               position: relative;

               @media screen and (max-width: 600px) {
                  font-size: 0.7rem;
               }

               &::after {
                  content: '';
                  height: 1px;
                  width: 0;
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  background-color: #2255FF;
                  transition: 200ms;
               }

               &:hover::after {
                  width: 100%;
               }

               &:last-child {
                  color: #FF0025;
               }

               &:last-child::after {
                  background-color: #FF0025;
               }
            }
         }

         &:hover {
            box-shadow: 0 3px 0 rgba(0, 0, 0, 0.15);
         }
      }
   }

   @media screen and (max-width: 600px) {
      padding: 0 3%;
      margin: 3rem 0;
   }
`
