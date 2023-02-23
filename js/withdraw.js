document.getElementById('withdraw-button').addEventListener('click',function(){
    const NewWithdrawVlaue=GetInputValueById('withdraw-feild');
    const CurrentWithdrawValue=GetTextValueById('curren-withdraw');
    const currentBlance=GetTextValueById('curren-balance');
    // ste new witdraw value using function
    const TotalWithdraw =CurrentWithdrawValue+NewWithdrawVlaue;
    const TotalWithdrawBalance=currentBlance-NewWithdrawVlaue;
    setTextElementValueById('curren-withdraw',TotalWithdraw);
    setTextElementValueById('curren-balance',TotalWithdrawBalance);
})
