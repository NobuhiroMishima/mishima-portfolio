function Headline({ title, subtitle }) {
  return (
    <>
      <h2 className="text-[40px] leading-10 font-medium">{title}</h2>
      <h3>{subtitle}</h3>
    </>
  );
}

export default Headline;
