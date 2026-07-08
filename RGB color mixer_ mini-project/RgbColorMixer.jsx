import { useMemo, useState } from "react";
import "./RgbColorMixer.css";

const toHex = (value) => value.toString(16).padStart(2, "0").toUpperCase();

function RgbColorMixer() {
  const [red, setRed] = useState(120);
  const [green, setGreen] = useState(80);
  const [blue, setBlue] = useState(200);

  const rgbColor = useMemo(() => `rgb(${red}, ${green}, ${blue})`, [red, green, blue]);
  const hexColor = useMemo(
    () => `#${toHex(red)}${toHex(green)}${toHex(blue)}`,
    [red, green, blue],
  );

  const generateRandomColor = () => {
    setRed(Math.floor(Math.random() * 256));
    setGreen(Math.floor(Math.random() * 256));
    setBlue(Math.floor(Math.random() * 256));
  };

  return (
    <div className="mixer-shell">
      <div className="mixer-card">
        <div className="mixer-preview" style={{ backgroundColor: rgbColor }} />

        <div className="mixer-content">
          <h1>Mini Project: RGB Color Mixer</h1>
          <p>Adjust the sliders to create any color and instantly view its RGB and HEX values.</p>

          <div className="value-boxes">
            <div>
              <span>RGB</span>
              <strong>{rgbColor}</strong>
            </div>
            <div>
              <span>HEX</span>
              <strong>{hexColor}</strong>
            </div>
          </div>

          <div className="slider-group">
            <label htmlFor="red">
              <span>Red</span>
              <strong>{red}</strong>
            </label>
            <input
              id="red"
              type="range"
              min="0"
              max="255"
              value={red}
              onChange={(event) => setRed(Number(event.target.value))}
            />
          </div>

          <div className="slider-group">
            <label htmlFor="green">
              <span>Green</span>
              <strong>{green}</strong>
            </label>
            <input
              id="green"
              type="range"
              min="0"
              max="255"
              value={green}
              onChange={(event) => setGreen(Number(event.target.value))}
            />
          </div>

          <div className="slider-group">
            <label htmlFor="blue">
              <span>Blue</span>
              <strong>{blue}</strong>
            </label>
            <input
              id="blue"
              type="range"
              min="0"
              max="255"
              value={blue}
              onChange={(event) => setBlue(Number(event.target.value))}
            />
          </div>

          <button type="button" onClick={generateRandomColor}>
            Generate Random Color
          </button>
        </div>
      </div>
    </div>
  );
}

export default RgbColorMixer;
