import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const ObservationTitle = styled.p`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
`;

export const TextArea = styled.textarea`
  width: 80%;
  margin: 0 auto;
  height: 100px;
  border-radius: 2px;
  border: 0.5px solid #000;
  background: #FAFAFA;
  resize: none;
  color: #5C5C5C;
  font-family: Roboto;
  font-size: 10px;
  margin: 8px 0;
`;

export const ConfirmButton = styled.button`
  border-radius: 3px;
  background: #809CAB;
  padding: 5px 10px;
  color: #fff;
  color: #FFF;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  line-height: 10px;
  cursor: pointer;
`;
