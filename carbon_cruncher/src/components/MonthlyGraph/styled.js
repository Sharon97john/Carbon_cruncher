import styled from "styled-components";
import { Container } from "../../main";
const GraphWrapper = styled(Container)`
  h4 {
    padding: 15px 19px 0px 19px;
    font-weight: 600;
  }
`;

const BarWrapper = styled(Container)`
  //   height: 300px;
`;

const CosumpCard = styled(Container)`
  padding: 10px;
  background-color: #ccc;
  border-radius: 5px;
  height: 70px;
  font-size: 35px;
  background-color: #ccc;
  display: flex;
  align-item: center;
  justify-content: center;
  span{
    font-size: 20px;
  }
  margin-top: 10px;
`;
const TreesCard = styled(Container)`
  padding: 10px;
  background-color: #ccc;
  border-radius: 5px;
  height: 70px;
  font-size: 35px;
  background-color: #DBFFDA;
  display: flex;
  align-item: center;
  justify-content: center;
  span{
    font-size: 20px;
  }
  margin-top: 10px;
  h5{
    margin-left: 10px;
  }
`;
export { GraphWrapper, BarWrapper, CosumpCard, TreesCard };
