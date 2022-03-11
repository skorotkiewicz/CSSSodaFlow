import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faUnderline,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faAlignJustify,
  faM,
} from "@fortawesome/free-solid-svg-icons";
import uppercase from "./../images/uppercase.svg";
import lineThrough from "./../images/line-through.svg";
import smallCaps from "./../images/small-caps.svg";

const Buttons = ({ handleOption, viewStyle }) => {
  const options = [
    { name: "bold", icon: faBold },
    { name: "italic", icon: faItalic },
    { name: "underline", icon: faUnderline },
    { name: "line-through", icon: faM }, // todo
    { name: "uppercase", icon: uppercase }, // todo
    { name: "small-caps", icon: faM }, // todo
    { name: "left", icon: faAlignLeft },
    { name: "center", icon: faAlignCenter },
    { name: "right", icon: faAlignRight },
    { name: "justify", icon: faAlignJustify },
  ];

  return (
    <>
      {options.map((o, key) => (
        <button
          className={`option o-${o} ${
            Object.values(viewStyle).indexOf(o.name) > -1 ? "active" : ""
          }`}
          key={key}
          onClick={() => {
            handleOption(o.name);
          }}
        >
          {o.name === "uppercase" ? (
            <span>
              <img src={uppercase} width={14} alt="uppercase" />
            </span>
          ) : o.name === "line-through" ? (
            <span>
              <img src={lineThrough} width={14} alt="line-through" />
            </span>
          ) : o.name === "small-caps" ? (
            <span>
              <img src={smallCaps} width={14} alt="small-caps" />
            </span>
          ) : (
            <FontAwesomeIcon icon={o.icon} />
          )}
        </button>
      ))}
    </>
  );
};

export default Buttons;
