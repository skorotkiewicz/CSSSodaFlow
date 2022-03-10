import { useState } from "react";
import UserColorPicker from "./UserColorPicker";

const Color = ({
  setColorInput,
  colorInput,
  fontColor,
  backgroundColor,
  color,
  setColor,
  setFontColor,
  setBackgroundColor,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="color popover">
      <select
        id="color"
        name="color"
        onChange={(e) => setColorInput(e.target.value)}
      >
        <option value="color">Font Color</option>
        <option value="backgroundColor">Background Color</option>
      </select>

      <input
        type="text"
        className="hexValue"
        value={colorInput === "color" ? fontColor : backgroundColor}
        onClick={() => setOpen((prev) => !prev)}
        maxLength={7}
        onChange={(e) => {
          let value = e.target.value;
          if (/^[0-9a-fA-F#]+$/.test(value)) {
            // setColor({ hex: e.target.value, rgb: {}, hsv: {} });
            if (colorInput === "color") {
              setFontColor(value);
            }
            if (colorInput === "backgroundColor") {
              setBackgroundColor(value);
            }
          }
        }}
      />

      {open && (
        <>
          <UserColorPicker
            colorInput={colorInput}
            color={color}
            setColor={setColor}
            setFontColor={setFontColor}
            setBackgroundColor={setBackgroundColor}
          />

          <div className="close" onClick={() => setOpen((prev) => !prev)}>
            x
          </div>
        </>
      )}
    </div>
  );
};

export default Color;
