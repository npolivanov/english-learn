import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import MaximizeIcon from "@material-ui/icons/Maximize";
import FormatLineSpacingIcon from "@material-ui/icons/FormatLineSpacing";

interface IProps {
  selectAll(): void;
  selectLine(): void;
  voice(): void;
}

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 0px;
  width: 100%;
`;

const Control = styled.div`
  position: relative;
`;

export default (props: IProps) => {
  return (
    <Wrapper>
      <Control>
        <IconButton onClick={props.selectLine}>
          <MaximizeIcon />
        </IconButton>

        <IconButton onClick={props.selectAll}>
          <FormatLineSpacingIcon />
        </IconButton>

        <IconButton onClick={props.voice}>
          <VolumeUpIcon />
        </IconButton>
      </Control>
    </Wrapper>
  );
};
