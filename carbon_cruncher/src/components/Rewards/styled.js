import styled from "styled-components";
import { Container } from "../../main";

const CardWrapper = styled(Container)`
  margin-top: -60px;
  padding: 0px 10px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding-bottom: 15px;
  .rewards{
    img{
        width: 50px !important;
    }
  }
`;

export { CardWrapper };
