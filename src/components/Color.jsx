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
