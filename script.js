const allFields = document.querySelectorAll("input[required]")

function customValidation(event) {
  event.preventDefault()

  const field = event.target
  const spanError = document.querySelectorAll(".error")

  if (field.type == "text") {
    if (field.validity.valueMissing) {
      spanError[0].classList.add("active")
      spanError[0].textContent = "* Esse campo é obrigatório!"
      event.target.focus()
      field.style.borderBottomColor = "#f00"
    } else {
      spanError[0].classList.remove("active")
      spanError[0].textContent = ""
      field.style.borderBottomColor = "#0f0"
    }
  } else {
    if (field.validity.valueMissing) {
      spanError[1].classList.add("active")
      spanError[1].textContent = "* Preencha com seu email!"
      field.style.borderBottomColor = "#f00"
      event.target.focus()
    } else if (field.validity.typeMismatch) {
      spanError[1].classList.add("active")
      spanError[1].textContent = "* Seu e-mail está incompleto '@emailserver'"
      event.target.focus()
      field.style.borderBottomColor = "#f00"
    } else {
      spanError[1].classList.remove("active")
      spanError[1].textContent = ""
      field.style.borderBottomColor = "#0f0"
    }
  }
}

allFields.forEach((field) => {
  field.addEventListener("invalid", customValidation)
  field.addEventListener("blur", customValidation)
})

const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
  event.preventDefault()

  console.log("formulário enviado")
})
