import { styled } from 'styled-components';

export const FilterContainer = styled.div`
  transition: all 0.5s ease;
  height: 100svh;
  max-width: ${({ $visible }) => ($visible ? '50%' : '0px')};
  border-radius: 0px 5px 5px 0px;
  background: #FAFAFA;
  position: fixed;
  bottom: 0px;
  left: 0px;
`;

export const FilterContent = styled.div`
  padding-top: 40px;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const FilterIconContainer = styled.div`
  position: absolute;
  right: -30px;
  border-radius: 0px 5px 5px 0px;
  background: hsl(0, 8%, 97%);
  top: 50svh;
  display: flex;
  padding: 4px;
  cursor: pointer;
`;

export const FilterTitle = styled.h1`
  color: #000;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  text-align: center;
`;

export const FilterSection = styled.div`
  padding: 16px 20px;
`;

export const FilterName = styled.p`
  color: #012126;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  padding-bottom: 16px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SubFilterContainer = styled.div`
  transition-duration: 0.5s;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: ${({ $visible }) => ($visible ? '100px' : '0px')};
  gap: 10px;
`;

export const ShowCotentIcon = styled.img`
  transition-duration: 0.5s;
  rotate: ${({ $visible }) => ($visible ? '0deg' : '180deg')};
  cursor: pointer;
`;

export const SubFilterNameContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding-bottom: 10px;
`;

export const SubFilterName = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;
