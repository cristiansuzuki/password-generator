import React from "react";
import { Checkbox } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

import {
  BoxStyled,
  ButtonGenerator,
  ButtonGeneratorText,
  ButtonGeneratorInput,
  CheckBoxText,
  DivAlignCheckbox,
  DivAlignCenter,
} from "./styles";

export default function MainBox() {
  const PrettoSlider = styled(Slider)({
    color: "#52af77",
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#52af77",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });

  return (
    <BoxStyled>
      <ButtonGeneratorInput />

      <DivAlignCenter>
        <DivAlignCheckbox style={{ marginBottom: "8%" }}>
          <Checkbox color="success" bigger />
          <CheckBoxText>Numeros</CheckBoxText>
        </DivAlignCheckbox>

        <DivAlignCheckbox style={{ marginBottom: "8%" }}>
          <Checkbox color="success" bigger />
          <CheckBoxText>Caracteres Especiais</CheckBoxText>
        </DivAlignCheckbox>

        <DivAlignCheckbox>
          <Checkbox color="success" bigger />
          <CheckBoxText>Letras Maiúsculas</CheckBoxText>
        </DivAlignCheckbox>
      </DivAlignCenter>

      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        step={1}
        marks
        min={5}
        max={20}
      />

      <ButtonGenerator>
        <ButtonGeneratorText>Gerar senha</ButtonGeneratorText>
      </ButtonGenerator>
    </BoxStyled>
  );
}
