import styled from "styled-components";

export const ContainerHomePage = styled.section`
  height: 375px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  flex-wrap: wrap;
  overflow-y: auto;
  gap: 20px;
  padding-bottom: 20px;

  &::-webkit-scrollbar {
    width: 10px;
    height: 9px;
  }
  &::-webkit-scrollbar-track {
    background: #062405;
    border-radius: 24px;
    width: 10px;
    transition: 2.3s;
  }
  &::-webkit-scrollbar-thumb {
    background: #0e611b;
    border-radius: 24px;
  }

  h2 {
    font-size: 18px;
    color: white;
    font-weight: 500;
  }
`;
