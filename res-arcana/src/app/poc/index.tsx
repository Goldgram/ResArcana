import React from 'react';
import { MAGES } from './consts/mages';
import { MONUMENTS } from './consts/monuments';
import { ARTIFACTS } from './consts/artifacts';

export const POC = () => {
  return (
    <>
      Mages: {MAGES.length}
      <br />
      Monuments: {MONUMENTS.length}
      <br />
      Artifacts: {ARTIFACTS.length}
      <br />
    </>
  );
};
