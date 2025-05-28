import { useState } from 'react';

const useModal = (): [boolean, () => void] => {
  const [isShowing, setIsShowing] = useState<boolean>(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return [isShowing, toggle];
};

export default useModal;
