import React, { useEffect, useState } from "react";
import ButtonControl from "./components/ButtonControl";
import LineGroup from "./components/LineGroup";
import Title from "./components/Title";
import ControlText from "./components/ControlText";
import { voice, selectLine, selectAll } from "./apiHandlerText";
import "./App.css";

interface KeyboardEvent {
  enterKey: boolean;
  keyCode: number;
}

interface TLines {
  text: string;
  textTranslate: string;
}

interface TSelectors {
  className: string;
  id: string;
}

function App() {
  const [lines, setLine] = useState<TLines[]>([
    {
      text: "Text transform",
      textTranslate: "",
    },
  ]);
  const [lang, setLang] = useState<string>("en-US");
  const [display, setDisplay] = useState<boolean>(true);
  const [selectors, setSelectors] = useState<TSelectors>({
    className: "",
    id: "",
  });

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

  const deleteLine = (iterator: number) => {
    // check that there is always at least one row
    if (lines.length === 1) {
      return;
    }
    const array = [...lines];
    array.splice(iterator, 1);
    setLine(array);
  };

  const focus = (className: string, id: string) => {
    setSelectors({ className: className, id: id });
  };

  const blur = (className: string) => {
    // setSelectedInput("");
  };

  return (
    <div className="App">
      <div className="content">
        <ButtonControl
          display={display}
          setDisplay={() => setDisplay(!display)}
        />
        <Title focus={focus} blur={blur} />
        {lines.map((item, i) => (
          <LineGroup
            key={i}
            iterator={i}
            item={item}
            focus={focus}
            blur={blur}
            display={display}
            changeText={changeText}
            changeTextTransle={changeTextTransle}
            deleteLine={deleteLine}
          />
        ))}
        <ControlText
          selectLine={() => selectLine(selectors.id)}
          selectAll={() => selectAll(selectors.className)}
          voice={() => voice(lang)}
        />
      </div>
    </div>
  );
}

export default App;
