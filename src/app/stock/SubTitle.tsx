import React, { FC, ReactNode } from 'react';

const Index: FC<{
  children: ReactNode,
}> = ({
  children
}) => {

    return <div
      style={{
        textAlign: 'left',
        marginTop: 10,
        // color: '#00bcd4',
        color: '#ffc107',
        fontSize: '16px',
      }}
    >
      {children}
    </div>
  }

export default Index;
