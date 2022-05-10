import styled from "styled-components";

export const Button = styled.button`
  width: 340px;
  height: 56px;

  display: inline-block;

  background: #ff9000;
  border-radius: 10px;

  border: none;

  transition-duration: 0.4s;

  :hover {
    cursor: pointer;
    background-color: #f4ede8;
  }

  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  text-align: center;

  color: #312e38;
`;
