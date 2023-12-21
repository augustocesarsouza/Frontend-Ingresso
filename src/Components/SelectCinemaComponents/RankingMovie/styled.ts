import styled from 'styled-components';

export const ContainerCategoriesMain = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 70px 0px 70px;
`

interface ContainerCategoryProps {
  $category: string;
  $arraycategory: string[];
}

export const ContainerCategory = styled.div<ContainerCategoryProps>`
  border: 2px solid #47a7f3;
  padding: 9px 22px;
  border-radius: 50px;
  cursor: pointer;

  background: ${props => props.$arraycategory.includes(props.$category) ? "#47a7f3" : ""};
`

interface PProps {
  $category: string;
  $arraycategory: string[];
}

export const P = styled.div<PProps>`
  color: #47a7f3;
  font-weight: 600;

  color: ${props => props.$arraycategory.includes(props.$category) ? "#393939" : ""};
  user-select: none;
`