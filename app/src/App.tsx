import React, { useEffect, useState } from "react";
import {
  TextField,
  Input,
  FormHelperText,
  FormControl,
} from "@material-ui/core";
import "./App.css";

interface KeyboardEvent {
  enterKey: boolean;
  keyCode: number;
}

function App() {
  const [lines, setLine] = useState([
    {
      text: "",
      textTranslate: "",
    },
  ]);

  useEffect(() => {
    (window as any).onkeydown = function (e: KeyboardEvent) {
      if (e.keyCode === 13) {
        let array = [...lines];
        array.push({
          text: "",
          textTranslate: "",
        });
        setLine(array);
        const input: any = (document as any).querySelector(
          `.item-${array.length - 1} input`,
        );
        input.focus();
      }
    };
  }, [lines]);

  const changeText = (e: any, i: number) => {
    let array = [...lines];
    array[i].text = e.target.value;
    setLine(array);
  };

  const changeTextTransle = (e: any, i: number) => {
    let array = [...lines];
    array[i].textTranslate = e.target.value;
    setLine(array);
  };

  return (
    <div className="App">
      <div className="content">
        <FormControl>
          <Input
            id="standard-adornment-weight"
            aria-describedby="standard-weight-helper-text"
            autoComplete="off"
            inputProps={{
              "aria-label": "weight",
              style: { textAlign: "center", fontWeight: "bold" },
            }}
          />
          <FormHelperText
            id="standard-weight-helper-text"
            style={{ textAlign: "center" }}
          >
            TITLE
          </FormHelperText>
        </FormControl>
        {lines.map((item, i) => (
          <div className="line" key={i}>
            <div className={`item-${i}`}>
              <TextField
                style={{ minWidth: "450px" }}
                autoComplete="off"
                label="Text for translate"
                value={lines[i].text}
                onChange={(event: any) => changeText(event, i)}
              />
            </div>
            <TextField
              label="translate"
              variant="filled"
              style={{ minWidth: "450px", fontStyle: "italic" }}
              autoComplete="off"
              size="small"
              value={lines[i].textTranslate}
              onChange={(event) => changeTextTransle(event, i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
