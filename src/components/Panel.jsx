import { useEffect, useState, useRef } from "react";
import Buttons from "./Buttons";
import Color from "./Color";
import FontFamily from "./FontFamily";
import FontSize from "./FontSize";
import Slider from "./Slider";
import { useColor } from "react-color-palette";
import LetterSpacing from "./../images/letterSpacing.gif";
import WordSpacing from "./../images/wordSpacing.gif";
import LineSpacing from "./../images/lineSpacing.gif";

const Panel = () => {
  const [letterSpacing, setLetterSpacing] = useState(1);
  const [wordSpacing, setWordSpacing] = useState(1);
  const [lineHeight, setLineHeight] = useState(1);
  const [color, setColor] = useColor("hex", "#121212");
  const [fontFamily, setFontFamily] = useState("verdana, sans-serif");
  const [fontSize, setFontSize] = useState("12");
  const [measure, setMeasure] = useState("px");
  const [colorInput, setColorInput] = useState("color");
  const [fontColor, setFontColor] = useState("#121212");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [style, setStyle] = useState({});
  const [viewStyle, setViewStyle] = useState({
    "font-family:": "verdana, sans-serif",
    "font-size:": "12px",
  });
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      setStyle({ ...style, fontFamily: fontFamily });
      setViewStyle({ ...viewStyle, "font-family:": fontFamily });
    }
  }, [fontFamily]);

  useEffect(() => {
    if (didMount.current) {
      setStyle({ ...style, fontSize: `${fontSize + measure}` });
      setViewStyle({ ...viewStyle, "font-size:": `${fontSize + measure}` });
    }
  }, [fontSize, measure]);

  useEffect(() => {
    if (didMount.current) {
      setStyle({ ...style, color: `${fontColor}` });
      setViewStyle({ ...viewStyle, "color:": `${fontColor}` });
    }
  }, [fontColor]);

  useEffect(() => {
    if (didMount.current) {
      setStyle({ ...style, backgroundColor: `${backgroundColor}` });
      setViewStyle({ ...viewStyle, "background-color:": `${backgroundColor}` });
    }
  }, [backgroundColor]);

  useEffect(() => {
    if (didMount.current) {
      setStyle({ ...style, letterSpacing: letterSpacing });
      setViewStyle({ ...viewStyle, "letter-spacing:": `${letterSpacing}pt` });
    }
  }, [letterSpacing]);

  useEffect(() => {
    if (didMount.current) {
      setStyle({ ...style, wordSpacing: wordSpacing });
      setViewStyle({ ...viewStyle, "word-spacing:": `${wordSpacing}pt` });
    }
  }, [wordSpacing]);

  useEffect(() => {
    if (didMount.current) {
      setStyle({ ...style, lineHeight: lineHeight });
      setViewStyle({ ...viewStyle, "line-spacing:": `${lineHeight}` });
    } else {
      didMount.current = true;
    }
  }, [lineHeight]);

  // console.log(style);
  // console.log(viewStyle);

  const removeObj = (obj, state, set) => {
    const s = { ...state };
    delete s[obj];
    set(s);
  };

  const handleOption = (option) => {
    switch (option) {
      case "bold":
        if ("fontWeight" in style) {
          removeObj("fontWeight", style, setStyle);
          removeObj("font-weight:", viewStyle, setViewStyle);
        } else {
          setStyle({ ...style, fontWeight: "bold" });
          setViewStyle({ ...viewStyle, "font-weight:": "bold" });
        }
        break;
      case "italic":
        if ("fontStyle" in style) {
          removeObj("fontStyle", style, setStyle);
          removeObj("font-style:", viewStyle, setViewStyle);
        } else {
          setStyle({ ...style, fontStyle: "italic" });
          setViewStyle({ ...viewStyle, "font-style:": "italic" });
        }
        break;
      case "underline":
        if ("textDecoration" in style) {
          if (style.textDecoration === "line-through") {
            setStyle({ ...style, textDecoration: "underline" });
            setViewStyle({ ...viewStyle, "text-decoration:": "underline" });
          } else {
            removeObj("textDecoration", style, setStyle);
            removeObj("text-decoration:", viewStyle, setViewStyle);
          }
        } else {
          setStyle({ ...style, textDecoration: "underline" });
          setViewStyle({ ...viewStyle, "text-decoration:": "underline" });
        }
        break;
      case "line-through":
        if ("textDecoration" in style) {
          if (style.textDecoration === "underline") {
            setStyle({ ...style, textDecoration: "line-through" });
            setViewStyle({ ...viewStyle, "text-decoration:": "line-through" });
          } else {
            removeObj("textDecoration", style, setStyle);
            removeObj("text-decoration:", viewStyle, setViewStyle);
          }
        } else {
          setStyle({ ...style, textDecoration: "line-through" });
          setViewStyle({ ...viewStyle, "text-decoration:": "line-through" });
        }
        break;
      /////////
      case "uppercase":
        if ("fontVariant" in style) {
          removeObj("fontVariant", style, setStyle);
          removeObj("font-variant:", viewStyle, setViewStyle);
        }

        if ("textTransform" in style) {
          removeObj("textTransform", style, setStyle);
          removeObj("text-transform:", viewStyle, setViewStyle);
        } else {
          setStyle({ ...style, textTransform: "uppercase" });
          setViewStyle({ ...viewStyle, "text-transform:": "uppercase" });
        }
        break;
      case "small-caps":
        if ("textTransform" in style) {
          removeObj("textTransform", style, setStyle);
          removeObj("text-transform:", viewStyle, setViewStyle);
        }

        if ("fontVariant" in style) {
          removeObj("fontVariant", style, setStyle);
          removeObj("font-variant:", viewStyle, setViewStyle);
        } else {
          setStyle({ ...style, fontVariant: "small-caps" });
          setViewStyle({ ...viewStyle, "font-variant:": "small-caps" });
        }
        break;
      /////////
      case "left":
        if (style["textAlign"] !== undefined && style.textAlign === "left") {
          removeObj("textAlign", style, setStyle);
          removeObj("text-align:", viewStyle, setViewStyle);
        } else {
          setStyle({ ...style, textAlign: "left" });
          setViewStyle({ ...viewStyle, "text-align:": "left" });
        }
        break;
      case "center":
        if (style["textAlign"] !== undefined && style.textAlign === "center") {
          removeObj("textAlign", style, setStyle);
          removeObj("text-align:", viewStyle, setViewStyle);
        } else {
          setStyle({ ...style, textAlign: "center" });
          setViewStyle({ ...viewStyle, "text-align:": "center" });
        }
        break;
      case "right":
        if (style["textAlign"] !== undefined && style.textAlign === "right") {
          removeObj("textAlign", style, setStyle);
          removeObj("text-align:", viewStyle, setViewStyle);
        } else {
          setStyle({ ...style, textAlign: "right" });
          setViewStyle({ ...viewStyle, "text-align:": "right" });
        }
        break;
      case "justify":
        if (style["textAlign"] !== undefined && style.textAlign === "justify") {
          removeObj("textAlign", style, setStyle);
          removeObj("text-align:", viewStyle, setViewStyle);
        } else {
          setStyle({ ...style, textAlign: "justify" });
          setViewStyle({ ...viewStyle, "text-align:": "justify" });
        }
        break;

      default:
        break;
    }
  };

  return (
    <div className="Panel">
      <div className="viewer">
        <div className="row">
          <div className="column col-50">
            Enter Text
            <textarea
              defaultValue="Paste the text you want to modify here."
              style={style}
              className="textArea"
            ></textarea>
          </div>
          <div className="column col-50">
            View CSS
            <textarea
              readOnly
              defaultValue={Object.entries(viewStyle)
                .map(([key, value]) => `${key} ${value};`)
                .join("\n")}
              // onClick={(e) => e.target.select()}
              onFocus={(e) => e.target.select()}
              className="textArea"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="settings">
        <div className="row">
          <FontFamily fontFamily={fontFamily} setFontFamily={setFontFamily} />
          <FontSize
            fontSize={fontSize}
            setFontSize={setFontSize}
            measure={measure}
            setMeasure={setMeasure}
          />
          <Color
            colorInput={colorInput}
            fontColor={fontColor}
            backgroundColor={backgroundColor}
            setColorInput={setColorInput}
            color={color}
            setColor={setColor}
            setFontColor={setFontColor}
            setBackgroundColor={setBackgroundColor}
          />
          <Buttons handleOption={handleOption} viewStyle={viewStyle} />
        </div>

        <div className="row">
          <div className="column col-33 letterSpacing">
            <Slider
              value={letterSpacing}
              setState={setLetterSpacing}
              min={-6}
              max={20}
              image={LetterSpacing}
            />
          </div>
          <div className="column col-33 wordSpacing">
            <Slider
              value={wordSpacing}
              setState={setWordSpacing}
              min={-20}
              max={30}
              image={WordSpacing}
            />
          </div>
          <div className="column col-3 lineSpacing">
            <Slider
              value={lineHeight}
              setState={setLineHeight}
              min={0}
              max={4}
              image={LineSpacing}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
