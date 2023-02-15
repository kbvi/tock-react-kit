import styled, { StyledComponent } from '@emotion/styled';
import React, { DetailedHTMLProps, HTMLAttributes, RefObject } from 'react';
import { prop } from 'styled-tools';

import { Button } from '../../TockContext';

import QuickReplyImage from './QuickReplyImage';

const QuickReplyButtonContainer = styled.li`
  list-style: none;
`;

const QuickReplyButton: StyledComponent<DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>> = styled.button`
  background: none;
  border: 2px solid ${prop<any>('theme.palette.background.bot')};
  border-radius: ${prop<any>('theme.sizing.borderRadius')};
  padding: 0.5em 1em;
  margin: 0 0.5em;
  display: inline-block;

  outline: none;
  color: ${prop<any>('theme.palette.background.bot')};
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;

  &:hover {
    border-color: ${prop<any>('theme.palette.text.bot')};
    color: ${prop<any>('theme.palette.text.bot')};
    background: ${prop<any>('theme.palette.background.bot')};
  }

  ${prop<any>('theme.overrides.quickReply', '')};
`;

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  Button;

const QuickReply = React.forwardRef<HTMLButtonElement, Props>(
  ({ imageUrl, label, ...rest }: Props, ref: RefObject<HTMLButtonElement>) => (
    <QuickReplyButtonContainer>
      <QuickReplyButton ref={ref} {...rest}>
        {imageUrl && <QuickReplyImage src={imageUrl} />}
        {label}
      </QuickReplyButton>
    </QuickReplyButtonContainer>
  ),
);

QuickReply.displayName = 'QuickReply';

export default QuickReply;
