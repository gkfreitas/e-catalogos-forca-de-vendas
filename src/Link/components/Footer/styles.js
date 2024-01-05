import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ $children }) => ($children ? 'space-between' : 'end')};
  padding: 28px 20px;
  background-color: #809CAA;
  height: 40px;
`;

export const SaveLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
  cursor: pointer;
`;

export const SaveLinkText = styled.p`
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
`;

export const SaveLinkSeparator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #FFF;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;
