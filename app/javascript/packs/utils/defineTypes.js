const ACTION_STATES = [
  'REQUEST',
  'SUCCESS',
  'FAILURE'
];

export const defineTypes = (prefix) => {
  prefix = prefix ? `${prefix}/` : ''
  return ACTION_STATES.reduce((acc, type) => (
   { ...acc, [type]: `${prefix}${type}`.toUpperCase() }
  ), {})
};
