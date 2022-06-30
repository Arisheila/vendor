let focusFirst=()=>{
    const first = document.registration.firstName.focus();
    return true; 

}

/*let valFirstName = ()=> {
    let userName = document.registration.firstName;
    
    let firstLen = userName.value.length;
    if (firstLen == 0 || firstLen < 4 || firstLen >= 12){
        userName.style.border = '3px solid red';
        userName.focus();
    }
    }
    */
   let valFirstName = (min, max, inputField, errormessage) =>{
    if(inputField.value.length < min || inputField.value.length >= max){
        errormessage.innerHTML = 'Must be 3-12 characters';
        errormessage.style.color = 'red';
        errormessage.style.fontSize = '11px';
        inputField.focus();
        return false;
    }else{
        errormessage.innerHTML = '';
        
        return true;
    }
   }
   let valSurName = (min, max, inputField, errorsec) =>{
       if(inputField.value.length < min || inputField.value.length >= max){
           errorsec.innerHTML = 'must be 4-12 characters';
           errorsec.style.color = 'red';
           errorsec.style.fontSize ='11px';
           inputField.focus();
           return false;
       }
       else{ 
           errorsec.innerHTML = '';
           return true;
       }
   }

// let valSurName = () => {
//     let uname = document.registration.surname;
//     let secondLen = uname.value.length;
//     if( secondLen == 0 || secondLen < 4 || secondLen >= 12) {
//         uname.style.border ='3px solid red';
//         uname.focus();
//     }

// }

// let valCont = () =>{
//     let num = document.registration.contact_num;
//     let conLen = num.value.length;
//     if ( conLen == 0 || conLen < 4 || conLen >=12 ) {
//         num.style.border = '4px solid red';
//         num.focus();
//     }
// }
let valCont = (contactField, contacterror)=>{
    let contactFormat = /[0-9]/;
    if(contactField.value.match(contactFormat) && contactField.value.length == 10){
        contacterror.innerHTML = '';
        return true;
    }else{
        contacterror.innerHTML = 'Enter valid phone number';
        contacterror.style.color = 'red';
        contacterror.style.fontSize = '11px';
        contactField.focus();
        return false;
        
    }
}


// let valNin = (NINInput, errormessage)=>{

// }


   let valNin = (NINinput, ninerror) =>{
       let validnin = /^[A-Z0-9]+$/;
    if(NINinput.value.match(validnin) && NINinput.value.length == 14){
        ninerror.innerHTML = '';

        return true;
    }else{
      
        ninerror.innerHTML = 'Enter valid NIN number';
        ninerror.style.color = 'red';
        ninerror.style.fontSize = '11px';
        NINinput.focus();

        return false;
    }
   }

   const varLoc =() =>{
    const loc = document.registration.location;
    const locate = /^[a-zA-Z0-9]+$/;
    if(loc.value.length < 2 || !loc.value.match(locate)){
        loc.style.border ='2px solid red';
        return false;
    }
    else{
        loc.style.border ='2px solid green';
        return true;
    }
   
};

const valKin =() =>{
    const kinn = document.registration.nextofkin;
    const keen = /^[a-zA-Z0-9]+$/;
    if(kinn.value.length < 2 || !kinn.value.match(keen)){
        kinn.style.border ='2px solid red';
        return false;
    }
    else{
        kinn.style.border ='2px solid green';
        return true;
    }
   
};

const valCap =() =>{
    const cap = document.registration.sizeofcapital;
    const kapital = /[0-9]/;
    if(cap.value.length < 6 || !cap.value.match(kapital)){
        cap.style.border ='2px solid red';
        return false;
    }
    else{
        cap.style.border ='2px solid green';
        return true;
    }
   
};
const varGoods =()=>{
    const good = document.registration.typeofgoods;
    const vogsdd =/^[a-zA-Z0-9]+$/;
    if(
        good.value.length <4 || !good.value.match(vogsdd)
    ){
        good.style.border ='2px solid red';
        return false;
    }
    else{
        good.style.border ='2px solid green';
        return false;
    }
}

const valAge =()=>{
    const agge = document.registration.age;
    const asse =/[0-9]/;
    if(
        agge.value.match(asse) && agge.value.length == 2
    ){
        agge.style.border ='2px solid green';
        return true;
    }
    else{
        agge.style.border ='2px solid red';
        return false;
    }
};

const valdate = () =>{
    let datte = document.registration.date;
    if(
        datte.value == ''
    ){
        datte.style.border ='2px Solid red'
        return false;
    }
    else {
        datte.style.border ='2px solid green'
        return true;
    }
    
};