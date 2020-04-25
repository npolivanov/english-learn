import React from "react";
import styled from "styled-components";
import { Input, FormHelperText, FormControl } from "@material-ui/core";

interface IProps {
  focus(className: string, id: string): void;
  blur(id: string): void;
}

const Wrapper = styled.div`
  margin-top: 100px;
`;

export default (props: IProps) => {
  return (
    <Wrapper>
      <FormControl>
        <Input
          id="standard-adornment-weight"
          aria-describedby="standard-weight-helper-text"
          autoComplete="off"
          className={"title"}
          onFocus={() => props.focus(`title`, `title`)}
          onBlur={() => props.blur(`title`)}
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
    </Wrapper>
  );
};
