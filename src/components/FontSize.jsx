const FontSize = ({ fontSize, setFontSize, measure, setMeasure }) => {
  return (
    <div className="fontSize">
      <label htmlFor="fontsize">Font Size:</label>

      <input
        type="text"
        id="fontsize"
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
      />

      <select
        id="measure"
        value={measure}
        onChange={(e) => setMeasure(e.target.value)}
      >
        <option value="px">px</option>
        <option value="em">em</option>
      </select>
    </div>
  );
};

export default FontSize;
