// colorUtils.js
import chroma from 'chroma-js';

// Generates a complementary color scheme
export const generateComplementaryScheme = (baseColor) => {
  return [baseColor, chroma(baseColor).set('hsl.h', '+180').hex()];
};

// Generates an analogous color scheme
export const generateAnalogousScheme = (baseColor) => {
  return chroma.scale([baseColor, chroma(baseColor).set('hsl.h', '+30').hex()]).colors(3);
};

// Generates a triadic color scheme
export const generateTriadicScheme = (baseColor) => {
  return [
    baseColor,
    chroma(baseColor).set('hsl.h', '+120').hex(),
    chroma(baseColor).set('hsl.h', '+240').hex()
  ];
};

// Generates a tetradic color scheme
export const generateTetradicScheme = (baseColor) => {
  return [
    baseColor,
    chroma(baseColor).set('hsl.h', '+90').hex(),
    chroma(baseColor).set('hsl.h', '+180').hex(),
    chroma(baseColor).set('hsl.h', '+270').hex()
  ];
};
