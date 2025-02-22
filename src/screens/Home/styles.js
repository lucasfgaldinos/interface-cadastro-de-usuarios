import styled from 'styled-components'

export const Container = styled.div`
   width: 100%;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 5rem;

   @media screen and (max-width: 900px) {
      gap: 2rem;
   }

   h1 {
      font-size: 3rem;
      font-weight: 700;
      animation: trackingInExpand 1.3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
   
      @media screen and (max-width: 900px) {
         font-size: 2rem;
         padding: 0 1rem;
         text-align: center;
      }

      @media screen and (max-width: 500px) {
         font-size: 1.5rem;
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
   display: flex;
   align-items: center;
   gap: 5rem;

   @media screen and (max-width: 900px) {
      flex-direction: column-reverse;
      gap: 2rem;
   }

   div {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      align-items: center;

      @media screen and (max-width: 600px) {
         gap: 1rem;
      }
   }

   img {
      max-width: 25rem;
      position: relative;
      left: 0;

      @media screen and (max-width: 900px) {
         width: 50%;
      }
   }
`
