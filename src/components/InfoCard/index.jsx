const InfoCard = ({ title, description, image }) => {
  return (
    <div className='bg-white rounded-2xl md:rounded-[30px] w-[280px] sm:w-[400px] lg:w-[480px] xl:w-[600px] xl:h-[580px] 3xl:w-[680px] 3xl:h-[640px] flex flex-col'>
      <div className='3xl:h-[400px]'>
        <img
          src={image}
          alt='Demo'
          className='w-full rounded-t-2xl md:rounded-t-[30px] 3xl:h-[400px] 3xl:object-cover'
        />
      </div>
      <div className='px-5 py-4 md:px-7 md:py-6 lg:px-8 lg:py-7 xl:px-9 xl:py-8 3xl:pl-10 3xl:pt-9 bg-white h-full rounded-b-2xl md:rounded-b-[30px]'>
        <h2 className='font-bold sm:text-[20px] md:text-[24px] xl:text-[30px] 2xl:text-[33.6px] leading-[47.04px] 3xl:h-[44px] mb-2 md:mb-5'>
          {title}
        </h2>
        <p className='xl:w-[420px] 3xl:w-[460px] text-base lg:text-xl font-normal leading-7 tracking-[0.02em] text-[#171717]'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
