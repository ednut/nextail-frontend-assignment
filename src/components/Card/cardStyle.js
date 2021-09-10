import styled from 'styled-components';

const CardStyle = styled.div`
  width: 24%;
  min-height: 10rem;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  margin-right: 1%;
  margin-bottom: 1rem;
  @media (max-width: 991px) {
    width: 100%;
  }
  &:last-child {
    margin-right: 0;
  }
  .overlay {
    display: none;
  }
  &:hover {
    .overlay {
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: rgba(225, 225, 225, 0.5);
      z-index: 1;
      button {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.65);
        border: 2px solid rgb(225, 225, 225);
        color: #fff;
        padding: 0.7rem 1.5rem;
        border-radius: 1.3rem;
        top: 9rem;
        left: 50%;
        transform: translate(-50%, 0);
        cursor: pointer;
        z-index: 2;
      }
    }
  }
  .img {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    width: 100%;
    height: 23rem;
    position: relative;
    border-radius: 4px 4px 0 0;
    span {
      background-color: ${(props) => props.theme.harsh};
      color: ${(props) => props.theme.white};
      position: absolute;
      border-radius: 3px;
      padding: 1px 5px;
      left: 0.5rem;
      top: 0.5rem;
      font-size: 14px;
    }
  }
  .wrap {
    padding: 1rem;
    .code {
      color: ${(props) => props.theme.grey};
      font-size: 13px;
    }
    .name {
      color: ${(props) => props.theme.textColor};
      margin-bottom: 1rem;
    }
    .price {
      color: ${(props) => props.theme.grey};
    }
    .stockout {
      border-bottom: 1px solid ${(props) => props.theme.borderColor};
      .percentage {
        padding-top: 5px;
        font-size: 2rem;
        color: ${(props) => props.theme.grey};
        .percent {
          display: inline-block;
          vertical-align: top;
          color: ${(props) => props.theme.grey};
          padding-right: 1px;
          font-size: 16px;
        }
        .label {
          color: ${(props) => props.theme.grey};
          font-size: 13px;
        }
      }
      .bar-wrap {
        width: 100%;
        background-color: #95a0ae36;
        height: 12px;
        border-radius: 1rem;
        margin-bottom: 1rem;
        .bar {
          background-color: ${(props) => props.theme.green};
          height: 12px;
          border-radius: 1rem;
        }
      }
    }
    .coverage {
      text-align: right;
      padding-top: 0.5rem;
      .title {
        font-size: 14px;
        font-weight: 600;
        &.good {
          color: ${(props) => props.theme.green};
        }
        &.bad {
          color: ${(props) => props.theme.red};
        }
      }
      .caption {
        font-size: 13px;
        color: ${(props) => props.theme.grey};
      }
    }
  }
`;

export default CardStyle;
