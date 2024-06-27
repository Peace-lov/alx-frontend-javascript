function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear(new Date())}`] = income;
  budget[`gdp-${getCurrentYear(new Date())}`] = gdp;
  budget[`capita-${getCurrentYear(new Date())}`] = capita;

  return budget;
}
