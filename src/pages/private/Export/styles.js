import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100svh;
`;

export const PageTitle = styled.p`
  color: #809CAA;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  width: 60%;
  margin: 14px auto 24px auto;
  border-bottom: 1px solid #809CAA;
`;

export const ContainerFields = styled.div`
  width: 100%;
  overflow: auto;
  height: auto;
`;

export const InputsRadioContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  padding: 4px 0;
`;

export const LabelText = styled.p`
  color: #6A6A6A;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px;
`;

export const TextAreaTitle = styled.p`
  color: #809CAA;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;

export const TextArea = styled.textarea`
  width: 80%;
  padding: 6px;
  border-radius: 3px;
  border: 0.5px solid #000;
  resize: none;
  color: #4D4D4D;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  max-height: 40px;
`;

export const ExportFooter = styled.footer`
  background: #809CAA;
  width: 100%;
  padding: 4px 30px;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const IconWithTextContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 6px;
`;

export const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const IconText = styled.p`
  color: #FFF;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
`;
