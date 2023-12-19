import { styled } from 'styled-components';

export const BasicButton = styled.button`
  font-family: Poppins;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
`;

export const ButtonLoginStyle = styled.div`
  margin-top: 20px;
  border-radius: 5px;
  background: #21C4E6;
  padding: 10px 20px;
  color: #FFF;
  font-size: 24px;
  transition-duration: 200ms;
  &:hover {
  color: #001A1E;  
}
`;

export const ButtonRegisterStyle = styled.div`
  margin-top: 10px;
  border-radius: 5px;
  background: #21C4E6;
  padding: 4px 20px;
  color: #FFF;
  font-size: 20px;
  line-height: 20px;
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
