
document.getElementById('deposit-button').addEventListener("click",function(){
 const NewDepositField=GetInputValueById('deposit-feild');
const CurrenDepositValu=GetTextValueById('depost-currenvalue');
const CurrenBlanceVlaue=GetTextValueById('curren-balance');

  const totalDeposit= CurrenDepositValu + NewDepositField;
  setTextElementValueById('depost-currenvalue',totalDeposit);
  
  // set total blance using function
  const TotalBlance= CurrenBlanceVlaue+NewDepositField;
  setTextElementValueById('curren-balance',TotalBlance)
  
});