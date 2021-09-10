import styled from 'styled-components';

const HeaderStyle = styled.div`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.lightRed};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 1rem 2rem;
  @media (max-width: 991px) {
    text-align: center;
  }
`;

export default HeaderStyle;
