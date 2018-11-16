let money = prompt('Ваш бюджет на месяц?', "20000");
let time = prompt('Введите дату в формате YYYY-MM-DD');
let answer1 = prompt('Введите обязательную статью расходов в этом месяце');
let answer2 = prompt('Во сколько обойдется?');
let answer3 = prompt('Введите обязательную статью расходов в этом месяцу');
let answer4 = prompt('Во сколько обойдется?');
let appData = {
  budget :  money,
  timeData : time,
  expenses : {answer1 : answer2 , answer3 : answer4},
  optionalExpenses : {},
  income : {},
  savings : false
}

alert('Бюджeт на 1 день '+ (appData.budget - answer2 - answer4)/30);