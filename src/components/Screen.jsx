const Screen = ({ title, children }) => {
  return (
    <section className="screen">
      <h1>{title}</h1>

      <div>{children}</div>
    </section>
  );
};

export default Screen;
