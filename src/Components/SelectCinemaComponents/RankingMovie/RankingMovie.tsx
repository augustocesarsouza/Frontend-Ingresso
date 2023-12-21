import * as Styled from './styled';
import { useState, useEffect } from 'react';

interface RankingMovieProps {
  setRankingMovieList: React.Dispatch<React.SetStateAction<string[]>>;
}

const RankingMovie = ({ setRankingMovieList }: RankingMovieProps) => {
  const [arrayCategory, setArrayCategory] = useState<string[]>([]);

  const handleCategoryClicked = (category: string) => {
    if (!arrayCategory.includes(category)) {
      setArrayCategory((prev) => [...prev, category]);
    } else if (arrayCategory.includes(category)) {
      setArrayCategory((prev) => prev.filter((el) => el !== category));
    }
  };

  useEffect(() => {
    setRankingMovieList(arrayCategory);
  }, [arrayCategory]);

  return (
    <Styled.ContainerCategoriesMain>
      <Styled.ContainerCategory
        $category="DUBLADO"
        $arraycategory={arrayCategory}
        onClick={() => handleCategoryClicked('DUBLADO')}
      >
        <Styled.P $category="DUBLADO" $arraycategory={arrayCategory}>
          DUBLADO
        </Styled.P>
      </Styled.ContainerCategory>
      <Styled.ContainerCategory
        $category="NORMAL"
        $arraycategory={arrayCategory}
        onClick={() => handleCategoryClicked('NORMAL')}
      >
        <Styled.P $category="NORMAL" $arraycategory={arrayCategory}>
          NORMAL
        </Styled.P>
      </Styled.ContainerCategory>
      <Styled.ContainerCategory
        $category="LEGENDADO"
        $arraycategory={arrayCategory}
        onClick={() => handleCategoryClicked('LEGENDADO')}
      >
        <Styled.P $category="LEGENDADO" $arraycategory={arrayCategory}>
          LEGENDADO
        </Styled.P>
      </Styled.ContainerCategory>
      <Styled.ContainerCategory
        $category="VIP"
        $arraycategory={arrayCategory}
        onClick={() => handleCategoryClicked('VIP')}
      >
        <Styled.P $category="VIP" $arraycategory={arrayCategory}>
          VIP
        </Styled.P>
      </Styled.ContainerCategory>
      <Styled.ContainerCategory
        $category="IMAX"
        $arraycategory={arrayCategory}
        onClick={() => handleCategoryClicked('IMAX')}
      >
        <Styled.P $category="IMAX" $arraycategory={arrayCategory}>
          IMAX
        </Styled.P>
      </Styled.ContainerCategory>
    </Styled.ContainerCategoriesMain>
  );
};

export default RankingMovie;
