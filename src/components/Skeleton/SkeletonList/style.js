import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export { List, Item };
