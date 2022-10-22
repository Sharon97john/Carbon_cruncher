import styled from "styled-components";

const CardWrapperInner = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: #fff;
  justify-content: center;
  padding: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  align-items: center;
  .add-size {
    width: 70px;
    padding: 15px;
  }
  .device-status {
    span {
      margin-left: 5px;
      color: #707070;
      font-size: 13px;
    }
    .check-icon {
      color: green !important;
    }
    .cross-icon {
      color: red !important;
    }
  }
`;

const LogoDevice = styled.img`
  width: 100px;
`;
export { CardWrapperInner, LogoDevice };
