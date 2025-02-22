import styled from 'styled-components'

export const Container = styled.div`
   width: 100%;
   min-height: 100vh;
   padding: 6rem 2rem;

   @media screen and (max-width: 600px) {
      padding: 3rem 1rem;
   }

   h2 {
      margin-top: 2rem;
      font-size: 2.5rem;
      font-weight: 600;
      text-align: center;
      margin-bottom: 5rem;
      animation: trackingInExpand 1.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
      
      @media screen and (max-width: 800px) {
         font-size: 2rem;
         margin-bottom: 1rem;
      }

      @media screen and (max-width: 600px) {
         font-size: 1.5rem;
         margin-bottom: 1rem;
      }

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
   }
`

export const Content = styled.div`
   width: 80%;
   margin: 0 auto;
   display: grid;
   grid-template-columns: 50% 50%;
   align-items: center;

   @media screen and (max-width: 800px) {
      display: flex;
      flex-direction: column-reverse;
      width: 100%;
   }

   .form-div {
      display: flex;
      align-items: center;
      justify-content: center;

      @media screen and (max-width: 800px) {
         width: 100%;
      }

      form {
         display: flex;
         flex-direction: column;
         width: 80%;
         max-width: 400px;

         @media screen and (max-width: 800px) {
            width: 90%;
         }
   
         label {
            display: flex;
            flex-direction: column;
            font-size: 1rem;
            color: #17B8A6;

            @media screen and (max-width: 800px) {
               font-size: 0.7rem;
            }

            input {
               height: 2rem;
               font-size: 1rem;
               border: 1px solid transparent;
               border-radius: 2px;
               outline: none;
               background-color: #31363F11;
               padding: 0 0.5rem;
               box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

               @media screen and (max-width: 800px) {
                  font-size: 0.7rem;
                  height: 1.5rem;
               }

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

               @media screen and (max-width: 800px) {
                  height: 1rem;
               }
            }
            
            span {
               font-size: 0.75rem;
               color: #FF0033;

               @media screen and (max-width: 800px) {
                  font-size: 0.5rem;
               }
            }
         }
      }
   }

   .image-div {
      padding: 2rem;

      @media screen and (max-width: 800px) {
         padding: 1rem;
      }
      
      img {
         width: 100%;
         max-width: 500px;

         @media screen and (max-width: 800px) {
            width: 60%;
            display: block;
            margin: 0 auto;
         }
      }
   }
`
