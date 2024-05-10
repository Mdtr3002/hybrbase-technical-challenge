import DemoImg from '../../assets/images/demoImg.png';
import InfoCard from '../../components/InfoCard';

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
  return (
    <div className='pt-[177px] pb-[157px] bg-[#F2F2F2]'>
      <div className='w-full flex flex-col items-center space-y-[57px]'>
        <h1 className='w-fit font-normal text-[77px] text-center leading-[92.4px]'>
          Why people love to
          <br /> work with us
        </h1>
        <button className='border-[1px] border-[#666666] rounded-[50px] py-5 px-10 font-bold text-base leading-[22.4px]'>
          Read more
        </button>
      </div>
      <div className='overflow-x-auto'>
        <div className='px-[260px] mt-[100px] flex space-x-10 w-fit'>
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
