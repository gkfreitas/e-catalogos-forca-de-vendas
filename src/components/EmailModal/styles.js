import styled from 'styled-components';

export const ContentModal = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 70svh;
  position: relative;
`;

export const ContainerSearchOrAdd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 14px;
  padding-top: 12px;
`;

export const ContainerInputsCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 12px;
  margin: 0 auto;
  overflow: auto;
  width: 70%;
`;

export const SendButton = styled.button`
  margin: 20px auto;
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: #809CAA;
`;

export const SendButtonText = styled.p`
  color: #FFF;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

export const PlusIconContainer = styled.div`
  position: absolute;
  top: 14px;
  right: 4px;
`;

export const EmailTextLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
