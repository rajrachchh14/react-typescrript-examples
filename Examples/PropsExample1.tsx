import * as React from 'react';

const PropsExample1 = (props: { name: number }) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};
export default PropsExample1;
