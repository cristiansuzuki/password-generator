import React, { useState } from "react";
import { Checkbox } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";
import Slider from "@mui/material/Slider";
import { FiCopy } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { COPY_SUCCESS } from "../../message";

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
  ButtonCopy,
  DivAlignIcon,
} from "./styles";

export default function MainBox() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(5);
  const [maiusculas, setMaiusculas] = useState(false);
  const [minusculas, setMinusculas] = useState(false);
  const [numeros, setNumeros] = useState(false);
  const [caracteresEspeciais, setCaracteresEspeciais] = useState(false);

  const handlePasswordLength = (e) => {
    if (!maiusculas && !minusculas && !numeros && !caracteresEspeciais) {
      notify("Selecione pelo menos uma opção", true);
    }
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

    setPassword(gerarSenha(lista));
  };

  const gerarSenha = (lista) => {
    let senha = "";
    const tamanho = lista.length;

    for (let i = 0; i < passwordLength; i++) {
      const index = Math.round(Math.random() * tamanho);
      senha = senha + lista.charAt(index);
    }
    return senha;
  };

//   Função de copiar
  const copyToClipboard = () => {
    const newTextArea = document.createElement("textarea");
    newTextArea.innerText = password;
    document.body.appendChild(newTextArea);
    newTextArea.select();
    document.execCommand("copy");
    newTextArea.remove();
  };

  const handleCopyPassword = () => {
    copyToClipboard();
    notify(COPY_SUCCESS);
  };

  const notify = (message, erro = false) => {
    if (erro) {
      toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <BoxStyled>
      <DivAlignIcon>
        <ButtonGeneratorInput value={password} />
        <ButtonCopy onClick={handleCopyPassword}>
          <FiCopy size={30} />
        </ButtonCopy>
      </DivAlignIcon>

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

      <Slider
        color="primary"
        aria-label="Small steps"
        defaultValue={0.00000005}
        step={1}
        marks
        min={5}
        max={20}
        valueLabelDisplay="auto"
        value={passwordLength}
        onChange={(_e, value) => setPasswordLength(value[0] || value)}
      />

      <ButtonGenerator onClick={handlePasswordLength}>
        <ButtonGeneratorText>Gerar senha</ButtonGeneratorText>
      </ButtonGenerator>

      <ToastContainer
        theme="dark"
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BoxStyled>
  );
}
