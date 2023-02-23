
function GetInputValueById(inputId){
    const InputValue=document.getElementById(inputId);
    const getInputValueString=InputValue.value;
    const NewInputValue=parseFloat(getInputValueString);
   return NewInputValue;
  
  }
  function GetTextValueById(TextId){
  const TextValue=document.getElementById(TextId);
  const GetTextValueString=TextValue.innerText;
  const NewTextValue=parseFloat(GetTextValueString);
  return NewTextValue;
  }
  // total value set function
  function setTextElementValueById(elementId,NewValue){
    const TextElement=document.getElementById(elementId);
    TextElement.innerText=NewValue
  
  }