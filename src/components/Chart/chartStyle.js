import styled from 'styled-components';

const ChartStyle = styled.div`
  position: relative;
  min-height: 7rem;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  padding-bottom: 1rem;
  &::after {
    content: '';
    position: absolute;
    height: 1rem;
    background-color: white;
    top: 8px;
    left: 0;
    right: 0;
  }
`;

export default ChartStyle;
