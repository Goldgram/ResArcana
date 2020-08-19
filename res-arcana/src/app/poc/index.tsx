import React from 'react';
import { MAGES } from './consts/mages';
import { MONUMENTS } from './consts/monuments';
import { ARTIFACTS } from './consts/artifacts';
import { MAGIC_ITEMS } from './consts/magic-items';

export const POC = () => {
  return (
    <>
      Mages: {MAGES.length}
      <br />
      Monuments: {MONUMENTS.length}
      <br />
      Artifacts: {ARTIFACTS.length}
      <br />
      Magic Items: {MAGIC_ITEMS.length}
    </>
  );
};
