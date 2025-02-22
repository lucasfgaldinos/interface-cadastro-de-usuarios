import styled from 'styled-components'

export const Container = styled.button`
   width: 3rem;
   height: 3rem;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 2rem;
   border-radius: 3rem;
   border: none;
   color: black;
   position: fixed;
   bottom: 5%;
   right: 5%;
   z-index: 10;
   ${(props) =>
			props.$showButtonBackToTop
				? `
      animation: toTop 1500ms infinite reverse ease-in-out;
   `
				: 'visibility: hidden;'};
   

   &:hover {
      transform: translateY(-3px) scale(1.1);
      background-color: #17B8A6;
      animation-play-state: paused;
   }

   @keyframes toTop {
      0% {
         transform: translateX(0);
      }
      50% {
         transform: translateY(-1rem);
      }
      100% {
         transform: translateX(0);
      }
   }
`
