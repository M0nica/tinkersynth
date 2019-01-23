import styled from 'styled-components';

import { COLORS, UNIT } from '../../constants';

const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.3;
  color: ${COLORS.gray[900]};
  margin-bottom: ${UNIT * 3}px;
`;

export default Paragraph;
