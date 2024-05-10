import * as Styled from './styled';
import { format, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import { Url } from '../../../Utils/Url';
import ListTheaterBanner from '../ListTheaterBanner/ListTheaterBanner';

interface DataTheatreProps {
  id: string;
  title: string;
  location: string;
  data: string;
  imgUrl: string;
}

export interface ArrayTheatreNewProps {
  id: string;
  splitLocation: string;
  joinStringData: string;
  title: string;
  imgUrl: string;
}

export interface FirstElementTheatre {
  imgUrl: string;
  splitLocation: string;
  joinString: string;
  title: string;
}

const TheatresBanner = () => {
  const [dataTheatre, setDataTheatre] = useState<DataTheatreProps[] | []>([]);

  useEffect(() => {
    if (dataTheatre.length > 0) return;

    const fetchTheatreData = async () => {
      const statusMovie = 'São Paulo';
      const res = await fetch(`${Url}/public/theatre/get-all-region/${statusMovie}`);

      if (res.status === 200) {
        const json = await res.json();
        const data = json.data;
        setDataTheatre(data);
        ModifyFirstObjectTheater(data);
        modifyArrayTheater(data);
      }
    };
    fetchTheatreData();
  }, []);

  const [arrayTheatreNew, setArrayTheatreNew] = useState<ArrayTheatreNewProps[] | []>([]);

  const modifyArrayTheater = (dataTheatre: DataTheatreProps[]) => {
    if (dataTheatre.length <= 0) return;
    const arrayTheatreNew = [];
    dataTheatre.forEach((the: DataTheatreProps, index) => {
      if (index !== 0) {
        const location = the.location;
        const positionComma = location.indexOf(',');
        const splitLocation = location.substring(0, positionComma);
        const title = TruncateDescription(the.title);

        const data = the.data;
        const imgUrl = the.imgUrl;
        const id = the.id;
        const dataParse = parseISO(data);

        const ano = format(dataParse, 'yy');
        const mes = format(dataParse, 'MM');
        const dia = format(dataParse, 'dd');

        const joinStringData = `ESTREIA ${dia}/${mes}/${ano}`;

        const obj = {
          id,
          splitLocation,
          joinStringData,
          title,
          imgUrl,
        };
        arrayTheatreNew.push(obj);
      }
    });

    setArrayTheatreNew(arrayTheatreNew);
  };

  const [firstElementTheatre, setFirstElementTheatre] = useState<FirstElementTheatre | null>(null);

  const ModifyFirstObjectTheater = (dataTheatre: DataTheatreProps[]) => {
    if (dataTheatre.length <= 0) return;
    const first = dataTheatre[0];
    const location = dataTheatre[0].location;
    const positionComma = location.indexOf(',');
    const splitLocation = location.substring(0, positionComma);
    const imgUrl = first.imgUrl;
    const title = first.title;

    const data = first.data;

    const dataParse = parseISO(data);

    const ano = format(dataParse, 'yy');
    const mes = format(dataParse, 'MM');
    const dia = format(dataParse, 'dd');

    const joinString = `ESTREIA ${dia}/${mes}/${ano}`;

    const objDef = {
      imgUrl,
      splitLocation,
      joinString,
      title,
    };

    setFirstElementTheatre(objDef);
  };

  const TruncateDescription = (description: string, maxLength = 22, suffix = '...') => {
    if (description.length <= 30) return description;

    if (description.length <= maxLength) {
      return description;
    } else {
      return `${description.substring(0, maxLength)}${suffix}`;
    }
  };

  return (
    <Styled.Section2>
      <Styled.ContainerH1>
        <Styled.H1>Teatros</Styled.H1>
      </Styled.ContainerH1>
      <ListTheaterBanner
        arrayTheatreNew={arrayTheatreNew}
        firstElementTheatre={firstElementTheatre}
      />
    </Styled.Section2>
  );
};

export default TheatresBanner;
