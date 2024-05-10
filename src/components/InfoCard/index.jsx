const InfoCard = ({ title, description, image }) => {
  return (
    <div className='bg-white rounded-[30px] w-[680px] h-[640px] flex flex-col'>
      <img src={image} alt='Demo' className='w-full rounded-t-[30px]' />
      <div className='pl-10 pt-8 bg-white h-full rounded-b-[30px]'>
        <h2 className='font-bold text-[33.6px] leading-[47.04px] mb-5'>{title}</h2>
        <p className='w-[460px] text-xl font-normal leading-7 tracking-[0.02em]'>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
