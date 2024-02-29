import styled from 'styled-components';

interface Props {
  id: string;
  content: string;
  complete: boolean;
}

const Item = ({ id, content, complete, ...props }: Props) => {
  return <ListItem {...props}>컨텐츠영역</ListItem>;
};

export default Item;

const ListItem = styled.li`
  display: flex;
  width: 400px;
  height: 40px;
  align-items: center;
  padding: 0 8px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  list-style: none;
  box-sizing: border-box;
`;
