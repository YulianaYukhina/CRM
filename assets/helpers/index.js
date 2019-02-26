
export const getArrivalDayValue = val => {
    switch (val) {
        case 1:
            return 'Понедельник';
        case 2:
            return 'Вторник';
        case 3:
            return 'Среда';
        case 4:
            return 'Четверг';
        case 5:
            return 'Пятница';
        case 6:
            return 'Суббота';
        default:
            return '';
    }
}

export const getCoolnessValue = val => {
  switch (val) {
    case 0:
      return 'Полковник';
    case 1:
      return 'Подполковник';
    case 2:
      return 'Майор';
    case 3:
      return 'Капитан';
    default:
      return '';
  }
}