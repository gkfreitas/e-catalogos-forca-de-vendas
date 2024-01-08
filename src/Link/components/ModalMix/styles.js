import styled from 'styled-components';

export const ContainerOverflow = styled.div`
  overflow: auto;
  flex-grow: 1;
`;

export const PrimaryText = styled.p`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 600;
`;

export const SecundaryText = styled.span`
  color: #000;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 300;
  line-height: 12px;
`;

export const InfosContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
`;
