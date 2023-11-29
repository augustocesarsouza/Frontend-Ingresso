import * as Styled from './styled';
import DDD from '../DDD/DDD';
import Phone from '../Phone/Phone';
import { useState, useEffect } from 'react';

interface PhoneNumberProps {
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  dd: string;
  setDD: React.Dispatch<React.SetStateAction<string>>;
  number: string;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
}

const PhoneNumber = ({ setPhone, dd, setDD, number, setNumber }: PhoneNumberProps) => {
  const [dddInfo, setDDDInfo] = useState('');
  const [phoneInfo, setPhoneInfo] = useState('');

  useEffect(() => {
    if (dddInfo.length === 2 && phoneInfo.length === 9) {
      let newPhone = `(${dddInfo[0]}${dddInfo[1]})${phoneInfo}`;
      setPhone(newPhone);
    }
  }, [dddInfo, phoneInfo]);
  // console.log(dddInfo);

  return (
    <Styled.ContainerMain>
      <DDD setDDDInfo={setDDDInfo} dddInfo={dddInfo} dd={dd} setDD={setDD} />
      <Phone
        setPhoneInfo={setPhoneInfo}
        phoneInfo={phoneInfo}
        number={number}
        setNumber={setNumber}
      />
    </Styled.ContainerMain>
  );
};

export default PhoneNumber;
