
import chroma from 'chroma-js';

export const generateComplementaryScheme = (baseColor) => {
  return [baseColor, chroma(baseColor).set('hsl.h', '+180').hex()];
};

export const generateAnalogousScheme = (baseColor) => {
  return chroma.scale([baseColor, chroma(baseColor).set('hsl.h', '+30').hex()]).colors(3);
};

export const generateTriadicScheme = (baseColor) => {
  return [
    baseColor,
    chroma(baseColor).set('hsl.h', '+120').hex(),
    chroma(baseColor).set('hsl.h', '+240').hex()
  ];
};

export const generateTetradicScheme = (baseColor) => {
  return [
    baseColor,
    chroma(baseColor).set('hsl.h', '+90').hex(),
    chroma(baseColor).set('hsl.h', '+180').hex(),
    chroma(baseColor).set('hsl.h', '+270').hex()
  ];
};
