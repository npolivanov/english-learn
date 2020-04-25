import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import DehazeIcon from "@material-ui/icons/Dehaze";
import BorderAllIcon from "@material-ui/icons/BorderAll";

interface IProps {
  setDisplay(): void;
  display: boolean;
}

const ButtonGroup = styled.div`
  display: flex;
`;

export default (props: IProps) => {
  return (
    <ButtonGroup>
      <IconButton
        color="default"
        disabled={!props.display}
        aria-label="dehaze"
        disableFocusRipple={true}
        onClick={props.setDisplay}
      >
        <DehazeIcon />
      </IconButton>
      <IconButton
        color="default"
        disabled={props.display}
        aria-label="border-all"
        onClick={props.setDisplay}
      >
        <BorderAllIcon />
      </IconButton>
    </ButtonGroup>
  );
};
