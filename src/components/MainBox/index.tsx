import React from "react";
import {
  Box,
  ButtonGenerator,
  ButtonGeneratorText,
  ButtonGeneratorInput,
} from "./styles";

export default function MainBox() {
  return (
    <Box>
      <ButtonGeneratorInput />
      <ButtonGenerator>
        <ButtonGeneratorText>Gerar senha</ButtonGeneratorText>
      </ButtonGenerator>
    </Box>
  );
}
