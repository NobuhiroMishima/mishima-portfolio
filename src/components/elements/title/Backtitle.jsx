function Backtitle({ color, text, className }) {
  return (
    <p
      style={{
        color: color,
      }}
      className={`${className} text-[128px] font-bold lg:tracking-[2rem]`}
    >
      {text}
    </p>
  );
}

export default Backtitle;
