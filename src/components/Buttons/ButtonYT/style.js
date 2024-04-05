import { styled } from 'styled-components';

export const BasicButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  font-family: Poppins;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
`;

export const ButtonTime = styled.span`
  font-size: 18px;
  color: #FF0000;
  font-weight: 500;
`;

export const ButtonYTStyle = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  max-width: 70%;
  max-height: 50px;
  color: #FFF;
  text-align: left;
  line-height: 24px;
  font-size: 18px;
  font-style: normal;
  padding: 5px;
  background: #F00;
  font-weight: 500;
  text-transform: uppercase;
  transition-duration: 200ms;
  &:hover {
  color: #001A1E;  
}
`;

export const ButtonLinkVideo = styled.a`
    text-decoration:none;
`;
