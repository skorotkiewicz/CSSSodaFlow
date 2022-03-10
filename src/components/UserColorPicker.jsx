import { ColorPicker } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

const UserColorPicker = ({
  colorInput,
  color,
  setColor,
  setFontColor,
  setBackgroundColor,
}) => {
  return (
    <div className="userColorPicker">
      <ColorPicker
        width={300}
        height={150}
        color={color}
        onChange={(e) => {
          setColor(e);
          if (colorInput === "color") {
            setFontColor(e.hex);
          }
          if (colorInput === "backgroundColor") {
            setBackgroundColor(e.hex);
          }
        }}
        hideHSV
        hideRGB
        hideHEX
        dark
      />
    </div>
  );
};

export default UserColorPicker;
