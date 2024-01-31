import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100svh;
`;

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
`;

export const WelcomeImage = styled.img`
  object-fit: contain;
`;

export const HighlightText = styled.a`
  color: #809CAA;
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
`;

export const PrimaryText = styled.p`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
`;

export const SecundaryText = styled.p`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  max-width: 288px;
`;

export const BoxCompany = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 10px;
`;

export const BoxRepresentative = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const VideoIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const ButtonVideo = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: Roboto;
  gap: 20px;
  margin-top: 32px;
  padding: 10px 30px;
  border-radius: 50px;
  background: #F3F1F1;
  box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.15);
`;

export const LogoHeader = styled.img`
  height: 70px;
`;
