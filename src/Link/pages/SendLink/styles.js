import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100svh;
`;

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  
`;

export const InputContainer = styled.label`
  display: flex;
  gap: 12px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #878787;
  box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.15);
  padding: 5px 6px;
`;

export const InputText = styled.input`
  width: 100%;
  font-family: Roboto;
  font-size: 14px;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
`;

export const MixButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid #07750C;
  background: #FFF;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  color: #07750C;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
`;

export const DeleteButton = styled.button`
   cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid #ED1F1F;
  background: #FFF;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  color: #ED1F1F;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: #D9D9D9;
`;

export const ClientsCardContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  overflow: auto;
  padding: 12px 0;
  width: 100%;
`;

export const ContainerExportClients = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ExportContainer = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  flex-direction: column;
  justify-content: center;
`;

export const ExportIcon = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
`;

export const ExportText = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  text-decoration-line: underline;
`;
