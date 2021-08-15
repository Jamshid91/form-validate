let aboutYourselfInputs = document.querySelectorAll('.form_validate_about_yourself input');
let educationInput = document.querySelectorAll('.form_validate_education input');
let btnSubmit = document.getElementById('btnSubmit');

const [firstName, lastName, middleName, dateBirth, userEmail, phone] = aboutYourselfInputs;
const [university, direction] = educationInput




btnSubmit.addEventListener('click', () => {
    formCheckInputs()

    if(firstName.classList == 'inputSucces'
        && lastName.classList == 'inputSucces' 
        && middleName.classList == 'inputSucces' 
        && dateBirth.classList == 'inputSucces' 
        && userEmail.classList == 'inputSucces' 
        && phone.classList == 'inputSucces' 
        && university.classList == 'inputSucces'
        && direction.classList == 'inputSucces'
     ){    
      return btnSubmit.type = 'submit'   
    }

    
})


function formCheckInputs() {
    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    let middleNameValue = middleName.value.trim();
    let dateBirthValue = dateBirth.value.trim();
    let userEmailValue = userEmail.value.trim();
    let phoneValue = phone.value.trim();
    let universityValue = university.value.trim();
    let directionValue = direction.value.trim();

    // firstName
  if(firstNameValue === '') {
    formSetErrorFor(firstName, 'Введите ваше фамилия')
    firstName.classList.add('error')
  } else if(firstNameValue.length <= 2) {
    formSetErrorFor(firstName, "Должно быть не менее 3 слов")
  } else {
    formSetSuccesFor(firstName)
    firstName.classList.remove('error')
  }

    // lastName
  if(lastNameValue === '') {
    formSetErrorFor(lastName, 'Введите ваше имя')
    lastName.classList.add('error')
  } else if(lastNameValue.length <= 2) {
    formSetErrorFor(lastName, "Должно быть не менее 3 слов")
  } else {
    formSetSuccesFor(lastName)
    lastName.classList.remove('error')
  }

  // middleName
  if(middleNameValue === '') {
    formSetErrorFor(middleName, 'Введите ваше отчество')
    middleName.classList.add('error')
  } else if(middleNameValue.length <= 2) {
    formSetErrorFor(middleName, "Должно быть не менее 3 слов")
  } else {
    formSetSuccesFor(middleName)
    middleName.classList.remove('error')
  }

  // dateBirth
  if(dateBirthValue === '') {
    formSetErrorFor(dateBirth, 'Введите ваше дата рождения')
    dateBirth.classList.add('error')
  } else if(dateBirthValue.length <= 8) {
    formSetErrorFor(dateBirth, "Должно быть день/месяц/год")
  } else {
    formSetSuccesFor(dateBirth)
    dateBirth.classList.remove('error')
  }

  // userEmail
  if(userEmailValue === '') {
    formSetErrorFor(userEmail, 'Введите ваше эл. почта')
    userEmail.classList.add('error')
  } else if(!isEmail(userEmailValue)) {
    formSetErrorFor(userEmail, 'Некорректный эл. почта')
  } else {
    formSetSuccesFor(userEmail)
    userEmail.classList.remove('error')
  }

  // user phone number
  if(phoneValue === '') {
    formSetErrorFor(phone, 'Введите свой номер телефона')
    phone.classList.add('error')
  } else {
    formSetSuccesFor(phone)
    phone.classList.remove('error')
  }

  
  // university
  if(universityValue === '') {
    formSetErrorFor(university, 'Введите место учебы')
    university.classList.add('error')
  } else {
    formSetSuccesFor(university)
    university.classList.remove('error')
  }
  
  // direction
  if(directionValue === '') {
    formSetErrorFor(direction, 'Введите свое направление обучения')
    direction.classList.add('error')
  } else {
    formSetSuccesFor(direction)
    direction.classList.remove('error')
  }

  
}


function formSetErrorFor(formInput, message) {
    let small = formInput.parentElement.children[2] 
        small.innerText = message
    }
    
    function formSetSuccesFor(formInput) {
    let small = formInput.parentElement.children[2]
        formInput.classList.add('inputSucces');
        small.innerText = ''
    }
  
  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

  $(document).ready(function() {
    $("#phone").mask("+7 (999) 99-99-999");
    $("#dateBirth").mask("99/99/9999");
  })