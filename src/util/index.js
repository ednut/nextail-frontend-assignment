export const percentage = (value) => {
  return value * 100;
};

export const warehouse_coverage = (value) => {
  if (value < 50) {
    return 'Very low';
  }
  return 'Good';
};

export const coverage_class = (value) => {
  if (value < 50) {
    return 'bad';
  }
  return 'good';
};
