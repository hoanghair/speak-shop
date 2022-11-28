
function HomeBannerMini({title, className, src1, src2}) {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <img src={src1} alt="" />
      <img src={src2} alt="" />
    </div>
  );
}

export default HomeBannerMini;
