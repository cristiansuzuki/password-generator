import styled from "styled-components";

export const Box = styled.div`
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
`;

export const ButtonGenerator = styled.button`
  height: 70px;
  width: 50%;
  background: #181818;
  border: 1px solid #007a33;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const ButtonGeneratorText = styled.text`
  font-family: monospace;
  font-size: 24px;
  color: #fff;
`;

export const ButtonGeneratorInput = styled.input`
  height: 70px;
  width: 80%;
  background: #181818;
  border: 1px solid #007a33;
  color: #fff;
  border-radius: 10px;
  padding: 15px;
  font-size: 22px;
  text-align: center;
`;
