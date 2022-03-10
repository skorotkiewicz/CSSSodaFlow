const FontFamily = ({ fontFamily, setFontFamily }) => {
  return (
    <div className="fontFamily">
      <select
        value={fontFamily}
        className="fontFamilySelect"
        onChange={(e) => setFontFamily(e.target.value)}
      >
        <option value='courier, "courier new", monospace'>Courier</option>
        <option value="georgia, serif">Georgia</option>
        <option value='"palatino linotype", palatino, serif'>Palatino</option>
        <option value='"times new roman", times, serif'>Times New Roman</option>
        <option value="arial, sans-serif">Arial</option>
        <option value="helvetica, sans-serif">Helvetica</option>
        <option value="impact, sans-serif">Impact</option>
        <option value="lato, sans-serif">Lato</option>
        <option value='"lucida sans unicode", "lucida grande", sans-serif'>
          Lucida Sans
        </option>
        <option value='"Tahoma", "Geneva", sans-serif'>Tahoma</option>
        <option value='"trebuchet MS", sans-serif'>Trebuchet MS</option>
        <option value="verdana, sans-serif">Verdana</option>
      </select>
    </div>
  );
};

export default FontFamily;
