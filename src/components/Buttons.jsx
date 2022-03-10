const Buttons = ({ handleOption, viewStyle }) => {
  const options = [
    "bold",
    "italic",
    "underline",
    "line-through",
    "uppercase",
    "small-caps",
    "left",
    "center",
    "right",
    "justify",
  ];

  return (
    <>
      {options.map((o, key) => (
        <button
          className={`option o-${o} ${
            Object.values(viewStyle).indexOf(o) > -1 ? "active" : ""
          }`}
          key={key}
          onClick={() => {
            handleOption(o);
          }}
        >
          {o.charAt(0)}
        </button>
      ))}
    </>
  );
};

export default Buttons;
