import React from "react";
import { Box, ButtonGenerator, ButtonGeneratorText } from "./styles";

export default function MainBox() {
  return (
    <Box>
      <ButtonGenerator>
        <ButtonGeneratorText>Gerar senha</ButtonGeneratorText>
      </ButtonGenerator>
    </Box>
  );
}
