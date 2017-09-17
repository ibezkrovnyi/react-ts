import * as React from 'react';

interface OwnProps {
  text: string;
}

export const Note: React.SFC<OwnProps> = ({ text }) => (
  <input>
    {text}
  </input>
);
