export const formatDate = (dateString: string) => {
  if (!dateString) return dateString;

  let [day, month, year] = dateString?.split("-").reverse();

  return `${day} ${getMonthNameFromNumber(Number(month) - 1)} ${year}`;
};

export const getMonthNameFromNumber = (num: number) => {
  let monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  return monthNames[num];
};

export const normalizeRatingValue = (rating: number | string) => {
  return Number(rating).toFixed(1).toString();
};
