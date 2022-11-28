function FooterInput({ className, title, input, button, placeholder }) {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <input placeholder={placeholder}>{input}</input>
      <button>{button}</button>
    </div>
  );
}

export default FooterInput;
