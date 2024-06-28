function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const CurrYear = getCurrentYear();
  const budget = {
	  [`income-${CurrYear}`]:income,
	  [`gdp-${CurrYear}`]:gdp,
	  [`capita-${CurrYear}`]:capita,
  };
  return budget;
}
