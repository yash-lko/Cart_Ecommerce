export const evaluateFormula = (expr, data) => {
  const replaced = expr.replace(/[A-Z]+\d+/g, (match) => {
    const val = data[match];
    if (val?.startsWith?.('=')) return evaluateFormula(val.slice(1), data);
    return val || 0;
  });

  return Function('"use strict";return (' + replaced + ')')();
};
