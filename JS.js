let money = +prompt('Ваш бюджет на месяц?', "20000");
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
  budget :  money,
  timeData : time,
  expenses : {},
  optionalExpenses : {},
  income : {},
  savings : false
}
/*
for (let i = 0; i<2; i++){
  let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
      b = prompt('Во сколько обойдется?',"");
  if( (typeof(a))==='string'&& (typeof(a)) !=null &&(typeof (b)) !=null
  && a!='' && b != '' && a.length < 50 ) {
    console.log("done");
    appData.expenses[a] = b;}
    else{
      i=0;
    }
  }
  */
//alert('Бюджет на 1 день ' + (appData.budget - expenses[a]) / 30);

/*
let i = 0;
do {
let a = prompt("Введите обязательную статью расходов в этом месяце", '');
let b = prompt('Во сколько обойдется?', "");
i++;
}
while(i<2);
*/
/*
let i =0;
while(i<2){
let a = prompt("Введите обязательную статью расходов в этом месяце", '');
let b = prompt('Во сколько обойдется?', "");
i++;
}
*/