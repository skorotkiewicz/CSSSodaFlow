import ReactSlider from "react-slider";

const Slider = ({ value, setState, min, max, image }) => {
  return (
    <>
      <div className="c-row slider-row">
        <img width="14" height="14" src={image} alt="LetterSpacing" />

        <ReactSlider
          className="slider"
          thumbClassName="thumb"
          trackClassName="track"
          step={0.1}
          min={min}
          max={max}
          onChange={(value) => setState(value)}
          renderThumb={(props) => (
            <div {...props}>
              {/* &#x25BC; */}
              &#x25B2;
            </div>
          )}
        />
      </div>
      {value}
    </>
  );
};

export default Slider;
