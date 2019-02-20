import React from 'react';
import styled from 'styled-components';

import { COLORS, UNIT } from '../../constants';

import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Spacer from '../Spacer';

const Column = ({ index, title, description, children }) => (
  <Wrapper>
    <InnerWrapper>
      <ChildWrapper>{children}</ChildWrapper>

      <Spacer size={UNIT * 4} />

      <Title size={4}>
        {index}. {title}
      </Title>

      <Details>{description}</Details>
    </InnerWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  flex: 1;
  color: ${COLORS.white};
`;

const InnerWrapper = styled.div`
  margin: auto;
  max-width: 244px;
  text-align: center;
`;

const Title = styled(Heading)`
  margin-bottom: ${UNIT * 2}px;
`;

const Details = styled(Paragraph)`
  font-size: 16px;
  color: inherit;
`;

const ChildWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: auto;
  background: rgba(255, 255, 255, 0.08);
`;

export default Column;