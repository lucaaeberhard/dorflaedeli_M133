module.exports = {
  theme: {
    extend: {
      colors: {
        'light-blue': '#5265b5',
        blue: '#2b42a2',
        orange: '#ff9141',
      },
    },
  },
  corePlugins: [
    'preflight',
    'alignItems',
    'display',
    'flex',
    'flexWrap',
    'flexDirection',
    'margin',
    'padding',
    'backgroundColor',
    'textAlign',
    'textTransform',
    'width',
    'fontSize',
    'textColor',
    'justifyContent',
    'lineHeight',
    'pointerEvents',
    'borderWidth',
    'borderColor',
    'borderRadius',
    'appearance',
    'position',
    'overflow',
    'inset',
    'height',
    'maxWidth',
    'objectFit',
    'fontWeight',
  ],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};