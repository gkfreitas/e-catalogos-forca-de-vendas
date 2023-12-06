import { styled } from 'styled-components';

export const BasicButton = styled.button`
  font-family: Poppins;
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;
`;

export const ButtonLoginStyle = styled.div`
  margin-top: 18px;
  border-radius: 20px;
  background: #21C4E6;
  padding: 5px 80px;
  color: #FFF;
  font-size: 24px;
  transition-duration: 200ms;
  &:hover {
  color: #001A1E;  
}
`;

export const ButtonYTStyle = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  color: #FFF;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  padding: 4px 25px;
  background: #F00;
  margin-top: 18px;
  font-weight: 600;
  text-transform: uppercase;
  transition-duration: 200ms;
  &:hover {
  color: #001A1E;  
}
`;
