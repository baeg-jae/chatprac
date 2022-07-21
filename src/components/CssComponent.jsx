import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import flex from './flex';
import './font.css';

export const FlexRowDiv = styled.div`
    ${flex({})}
`;

export const FlexColumnDiv = styled.div`
    ${flex({ direction: 'column' })}
`;
export const StWrap = styled.div`
    width: 100%;
    height: 100vh;
`;
export const StInput = styled.input`
    font-size: 16px;
    &::placeholder {
        color: var(--white);
        font-size: 16px;
    }
`;

export const StWrapFlex = styled(StWrap)`
    ${flex({ direction: 'column' })}
    color: var(--brown)
`;

export const fadeAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const dropBoxAnimation = keyframes`
    0%{
        transform: translateX(50px) scale(0);
    } 100% {
        transform: translateX(0) scale(1);
    }
`;

export const ButtonClicked = () => keyframes`
  50% {  
    transform: translateY(-20px); 
}
  100% {  
    transform: translateY(0); 
}
`;

export const CenterCardAnim = () => keyframes`
  0% {  
    transform: translateX(0) translateY(0);
    opacity: 1;
}
  100% {  
    transform: translateX(-290px) translateY(50px); 
    opacity: 0.6;
}
`;

export const RightCardAnim = () => keyframes`
  0% {  
    transform: translateX(0) translateY(0); 
    opacity: 0.6;
}
  100% {  
    transform: translateX(-290px) translateY(-50px); 
    opacity: 1;
}
`;

export const RightRightCardAnim = () => keyframes`
  0% {  
    transform: translateX(0); 
}
  100% {  
    transform: translateX(-290px); 
}
`;
//필터 다시공부히기
