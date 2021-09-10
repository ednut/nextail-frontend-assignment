import styled from 'styled-components';

const ContainerStyle = styled.div`
  width: 95%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 5rem;
  @media (max-width: 991px) {
    width: 90%;
    margin-top: 20px;
  }
`;

export default ContainerStyle;
