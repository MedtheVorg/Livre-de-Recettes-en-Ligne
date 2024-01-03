import { AiOutlineArrowUp } from 'react-icons/ai';
import { useEffect, useState } from 'react';

const GoToTheTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  function handleButtonClicked() {
    window.scrollTo({ left: 0, top: 0 });
  }

  useEffect(() => {
    const onScroll = () => {
      let scrollY = window.scrollY;
      setIsVisible(scrollY > 800);
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      className={`rounded-full p-4 bg-customBlack text-customBorderColor fixed right-[20px] bottom-[20px] cursor-pointer border-4 border-customGreen hover:border-gray-500 hover:scale-110 transition-all duration-300  z-50 ${
        isVisible ? 'block' : 'hidden'
      }`}
      onClick={handleButtonClicked}
    >
      <AiOutlineArrowUp />
    </div>
  );
};
export default GoToTheTop;
