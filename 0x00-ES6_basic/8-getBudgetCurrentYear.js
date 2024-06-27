function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear(income)}`] = income;
  budget[`gdp-${getCurrentYear(gdp)}`] = gdp;
  budget[`capita-${getCurrentYear(capita)}`] = capita;

  return budget;
}
