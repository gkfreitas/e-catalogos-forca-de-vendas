import { styled } from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  padding: 0px 10px;
  border-radius: 5px;
  background: #fff;
  color: #6f97ab;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
`;

export const PackContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;
`;

export const SizeCircle = styled.div`
  position: absolute;
  font-size: 0px;
  top: -13px;
  right: -12px;
`;

export const PackText = styled.span`
  text-align: center;
  color: #fff;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  position: absolute;
  top: -14px;
  width: 100%;
`;
