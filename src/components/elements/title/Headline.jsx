import TextAnimation from "../animations/TextAnimation";

function Headline({ title, subtitle }) {
  return (
    <>
      <h2 className="text-[40px] leading-10 font-medium">
        <TextAnimation text={title} />
      </h2>
      <h3>
        <TextAnimation text={subtitle} />
      </h3>
    </>
  );
}

export default Headline;
