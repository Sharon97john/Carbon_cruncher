import styled from "styled-components";
import { Container } from "../../main";
const ProgressWrapper = styled(Container)`
  padding-bottom: 10px;
  max-width: 250px;
  margin: auto;
  margin-top: 50px;
`;
const ContainerGame = styled(Container)`
  margin-top: 65px;
  padding: 15px;
`;
const Treeks = styled(Container)`
  background-color: #dbffda;
  height: 70px;
  padding: 10px;
  .treeks-icons {
    display: flex;
    gap: 10px;
    span {
      font-size: 20px;
    }
    img{
        width: 30px;
    }
  }
`;
export { ProgressWrapper, ContainerGame, Treeks };
