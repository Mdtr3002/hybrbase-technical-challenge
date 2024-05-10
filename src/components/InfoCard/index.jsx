const InfoCard = ({ title, description, image }) => {
  return (
    <div className='bg-white rounded md:rounded-[30px] w-[280px] sm:w-[400px] lg:w-[480px] xl:w-[600px] xl:h-[580px] 3xl:w-[680px] 3xl:h-[640px] flex flex-col'>
      <img src={image} alt='Demo' className='w-full rounded-t md:rounded-t-[30px]' />
      <div className='px-5 py-4 md:px-7 md:py-6 lg:px-8 lg:py-7 xl:px-9 xl:py-8 3xl:pl-10 3xl:pt-9 bg-white h-full rounded-b md:rounded-b-[30px]'>
        <h2 className='font-bold text-xl md:text-2xl xl:text-3xl 2xl:text-[33.6px] leading-[47.04px] mb-2 md:mb-5'>
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
