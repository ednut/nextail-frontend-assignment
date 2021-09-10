import styled from 'styled-components';

const PopupStyle = styled.div`
  position: absolute;
  background-color: rgba(225, 225, 225, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
  .content {
    position: absolute;
    top: 10rem;
    left: 50%;
    transform: translate(-50%, 0);
    cursor: pointer;
    background-color: ${(props) => props.theme.white};
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    min-height: 10rem;
    width: 40%;
    padding: 2rem;
    @media (max-width: 991px) {
      width: 90%;
    }
    .close {
      position: absolute;
      border: navajowhite;
      background: transparent;
      right: -1.25rem;
      font-size: 2rem;
      top: -1.25rem;
      color: ${(props) => props.theme.red};
      @media (max-width: 991px) {
        display: none;
      }
    }
    .text {
      text-align: center;
      margin-bottom: 4rem;
    }
    .action-wrap {
      display: flex;
      justify-content: space-between;
      button {
        border: none;
        padding: 0.7rem 2rem;
        border-radius: 4px;
      }
      .cancle {
        background-color: ${(props) => props.theme.red};
        color: ${(props) => props.theme.white};
      }
      .confirm {
        background-color: ${(props) => props.theme.green};
        color: ${(props) => props.theme.white};
      }
    }
  }
`;

export default PopupStyle;
