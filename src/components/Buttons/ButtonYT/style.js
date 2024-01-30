import { styled } from 'styled-components';

export const BasicButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: Poppins;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
`;

export const ButtonTime = styled.span`
  font-size: 19px;
  color: #FF0000;
  font-weight: 500;
`;

export const ButtonYTStyle = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  max-width: 200px;
  color: #FFF;
  text-align: left;
  line-height: 24px;
  font-size: 18px;
  font-style: normal;
  padding: 4px 1px;
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
    margin-top: 18px;
`;
