import React, { useState } from "react";
import { Checkbox } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import {
  caractereNumero,
  caractereMaiusculo,
  caractereMinusculo,
  especiais,
} from "../../caracteres";

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
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(5);
  const [maiusculas, setMaiusculas] = useState(false);
  const [minusculas, setMinusculas] = useState(false);
  const [numeros, setNumeros] = useState(false);
  const [caracteresEspeciais, setCaracteresEspeciais] = useState(false);

  const handlePasswordLength = (e) => {
    let lista = "";

    if (maiusculas) {
      lista = lista + caractereMaiusculo;
    }

    if (minusculas) {
      lista = lista + caractereMinusculo;
    }

    if (numeros) {
      lista = lista + caractereNumero;
    }

    if (caracteresEspeciais) {
      lista = lista + especiais;
    }

    setPassword(lista);
  };

  // function escutaValor() {
  //   console.log(numeros);
  // }

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
      <ButtonGeneratorInput value={password} />

      <DivAlignCenter>
        <DivAlignCheckbox style={{ marginBottom: "8%" }}>
          <Checkbox
            onChange={(e) => setNumeros(e.target.checked)}
            checked={numeros}
            animation="jelly"
            color="success"
            bigger
          />
          <CheckBoxText>Numeros</CheckBoxText>
        </DivAlignCheckbox>

        <DivAlignCheckbox style={{ marginBottom: "8%" }}>
          <Checkbox
            onChange={(e) => setCaracteresEspeciais(e.target.checked)}
            checked={caracteresEspeciais}
            animation="jelly"
            color="success"
            bigger
          />
          <CheckBoxText>Caracteres Especiais</CheckBoxText>
        </DivAlignCheckbox>

        <DivAlignCheckbox style={{ marginBottom: "8%" }}>
          <Checkbox
            onChange={(e) => setMaiusculas(e.target.checked)}
            checked={maiusculas}
            animation="jelly"
            color="success"
            bigger
          />
          <CheckBoxText>Letras Maiúsculas</CheckBoxText>
        </DivAlignCheckbox>

        <DivAlignCheckbox>
          <Checkbox
            onChange={(e) => setMinusculas(e.target.checked)}
            checked={minusculas}
            animation="jelly"
            color="success"
            bigger
          />
          <CheckBoxText>Letras Minúsculas</CheckBoxText>
        </DivAlignCheckbox>
      </DivAlignCenter>

      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        min={5}
        max={20}
        value={passwordLength}
        onChange={(e) => setPasswordLength(e.target.value)}
      />

      <ButtonGenerator onClick={handlePasswordLength}>
        <ButtonGeneratorText>Gerar senha</ButtonGeneratorText>
      </ButtonGenerator>
    </BoxStyled>
  );
}
