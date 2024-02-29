import React from 'react';
import styled from 'styled-components';
import Item from '../Item';

const List = (props: any) => {
  return <UnorderedList {...props}>아이템 영역</UnorderedList>;
};

export default List;

const UnorderedList = styled.ul`
  width: 400px;
  margin: 0;
  margin-top: 16px;
  padding: 0;

  & > li {
    &:not(:first-of-type) {
      margin-top: 8px;
    }
  }
`;
