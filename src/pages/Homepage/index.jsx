import DemoImg from '../../assets/images/demoImg.png';
import InfoCard from '../../components/InfoCard';
import { useRef, useEffect, useState } from 'react';

const InfoCardContent = [
  {
    title: 'Craftmanship',
    description:
      'Get best-in-class content and digital experiences from our craft, we value each process carefully and focus on details more than anyone else.',
    image: DemoImg,
  },
  {
    title: 'Craftmanship',
    description:
      'Get best-in-class content and digital experiences from our craft, we value each process carefully and focus on details more than anyone else.',
    image: DemoImg,
  },
  {
    title: 'Craftmanship',
    description:
      'Get best-in-class content and digital experiences from our craft, we value each process carefully and focus on details more than anyone else.',
    image: DemoImg,
  },
];

const Homepage = () => {
  const scrollRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  useEffect(() => {
    const el = scrollRef.current;
    if (el && !isMobile) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 4,
          behavior: 'smooth',
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, [isMobile]);

  return (
    <div className='pt-[60px] pb-10 sm:pt-[80px] min-h-[100vh] sm:pb-[60px] md:pt-[100px] md:pb-[80px] lg:pt-[120px] lg:pb-[100px] xl:pt-[140px] xl:pb-[120px] 3xl:pt-[177px] 3xl:pb-[157px] bg-[#F2F2F2]'>
      <div className='w-full flex flex-col items-center space-y-10 md:space-y-[48px] xl:space-y-[52px] 2xl:space-y-[57px]'>
        <h1 className='w-fit font-normal text-2xl sm:text-[32px] md:text-3xl lg:text-[44px] xl:text-[60px] 3xl:text-[77px] text-center leading-8 sm:leading-[40px] md:leading-[48px] lg:leading-[60px] xl:leading-[80px] 2xl:leading-[92.4px]'>
          Why people love to
          <br /> work with us
        </h1>
        <button className='border-[1px] border-[#666666] rounded-[50px] py-2 px-4 md:py-3 md:px-6 xl:py-4 xl:px-8 3xl:py-5 3xl:px-10 font-bold text-base leading-[22.4px]'>
          Read more
        </button>
      </div>
      <div
        ref={scrollRef}
        className='md:overflow-x-auto hide-scrollbar mt-[60px] md:mt-[80px] 2xl:mt-[100px]'
      >
        <div className='md:px-[100px] lg:px-[140px] xl:px-[180px] 2xl:px-[220px] 3xl:px-[260px] flex flex-col mx-auto md:mx-0 md:flex-row space-y-5 md:space-y-0 md:space-x-10 w-fit'>
          {InfoCardContent.map((content, index) => (
            <InfoCard
              key={index}
              title={content.title}
              description={content.description}
              image={content.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
