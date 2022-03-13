import styled from "styled-components";

export const BoxStyled = styled.div`
  background-color: #121212;
  height: 500px;
  width: 900px;
  margin-top: 10%;
  border-radius: 60px;
  border: 1px solid #007a33;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
`;

export const ButtonGenerator = styled.button`
  height: 70px;
  width: 100%;
  background: #181818;
  border: 1px solid #007a33;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  :hover {
    transition: 0.2s ease-in-out;
    background-color: #121212;
    cursor: pointer;
  }
`;

export const DivAlignCenter = styled.div``;

export const DivAlignCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

export const CheckBoxText = styled.text`
  font-family: monospace;
  font-size: 18px;
`;

export const ButtonGeneratorText = styled.text`
  font-family: monospace;
  font-size: 24px;
  color: #fff;
`;

export const ButtonGeneratorInput = styled.input`
  height: 70px;
  width: 100%;
  background: #181818;
  border: 1px solid #007a33;
  color: #fff;
  border-radius: 10px;
  padding: 15px;
  font-size: 22px;
  text-align: center;
  font-family: monospace;
  :focus {
    outline: none;
  }
`;

export const ButtonCopy = styled.button`
  background: transparent;
  border: none;
  color: #007a33;
  margin-left: 1%;
`;

export const DivAlignIcon = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
