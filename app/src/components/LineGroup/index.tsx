import React from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
interface TItem {
  text: string;
  textTranslate: string;
}

interface IProps {
  item: TItem;
  iterator: number;
  display: boolean;
  focus(className: string, id: string): void;
  blur(className: string): void;
  changeText(event: any, iterator: number): void;
  changeTextTransle(event: any, iterator: number): void;
  deleteLine(iterator: number): void;
}

type TStyledLine = {
  display: number;
};

const LineGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const Line = styled.div<TStyledLine>`
  display: flex;
  flex-direction: ${(props: TStyledLine) => (props.display ? "row" : "column")};
  margin-top: 25px;
`;

export default (props: IProps) => {
  const { display, item, iterator } = props;

  return (
    <LineGroup>
      <Line display={display ? 1 : 0}>
        <div className={`item-${iterator}`}>
          <TextField
            style={{ minWidth: "400px" }}
            autoComplete="off"
            label="Text for translate"
            value={item.text}
            className={`item-inner`}
            id={`item-inner-${iterator}`}
            onFocus={() => props.focus("item-inner", `item-inner-${iterator}`)}
            onBlur={() => props.blur(`item-${iterator}`)}
            onChange={(event: any) => props.changeText(event, iterator)}
          />
        </div>
        <div>
          <TextField
            label="translate"
            variant="filled"
            style={{ minWidth: "400px", fontStyle: "italic" }}
            autoComplete="off"
            size="small"
            value={item.textTranslate}
            className={`item-inner-translate`}
            id={`item-inner-translate-${iterator}`}
            onFocus={() =>
              props.focus(
                `item-inner-translate`,
                `item-inner-translate-${iterator}`,
              )
            }
            onBlur={() => props.blur(`item-inner-translate-${iterator}`)}
            onChange={(event: any) => props.changeTextTransle(event, iterator)}
          />
        </div>
      </Line>
      <IconButton onClick={() => props.deleteLine(iterator)}>
        <DeleteForeverIcon />
      </IconButton>
    </LineGroup>
  );
};
