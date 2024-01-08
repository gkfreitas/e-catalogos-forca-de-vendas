import { styled } from 'styled-components';

export const ToolsContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
  padding: 4px 0px;
`;

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  align-items: center;
  
`;

export const ImagePreview = styled.img`
  padding: 1px;
  border: 1px solid #5DA0AD;
  width: 44px;
  height: 44px;
  object-fit: contain;
  cursor: pointer;
`;

export const ToolIcon = styled.img`
  width: 34px;
  height: 34px;
  object-fit: contain;
  cursor: pointer;
`;
