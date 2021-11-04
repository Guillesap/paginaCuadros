//dark mode
const darkMode = () => {
  $("body").css("background", "-webkit-linear-gradient(45deg, rgb(17, 17, 17) 0%,rgb(13, 14, 13) 51%,rgb(27, 27, 27) 100%)")
  $("h1").css("color", "white")
  $("p").css("color", "white")
  $("h2").css("color", "white")
  $("h3").css("color", "white")
  $("#muchoEstilo").css("background-color", "black")
  $(".cArteles div").css("background-color", "black")
  localStorage.setItem("oScuro", "dark")
}

const ligthMode = () => {
  $("body").css("background", "-webkit-linear-gradient(45deg, rgb(244, 245, 245) 0%,rgb(243, 245, 243) 51%,rgb(245, 241, 244) 100%)")
  $("h1").css("color", "black")
  $("p").css("color", "black")
  $("h2").css("color", "black")
  $("h3").css("color", "black")
  $("#muchoEstilo").css("background-color", "white")
  $(".cArteles div").css("background-color", "white")
  localStorage.setItem("oScuro", "ligth")
}


$("#oScuro").on("click", () => {
  if (localStorage.getItem("oScuro") === "dark") {
      ligthMode()
  } else {
      darkMode()
  }
})

//FORMULARIO
class Person{
  constructor(name, surname, email, phone, id){
      return {
          name: name,
          surname : surname,
          email : email,
          phone : phone,
          id: id
      }
  }
}


const btn = document.querySelector('#guardar')
const table = document.querySelector('#table')


let people = []

const guardar = () => {
  const name = document.querySelector('#name').value
  const surname = document.querySelector('#surname').value
  const email = document.querySelector('#email').value
  const phone = document.querySelector('#phone').value

  let listPeople = JSON.parse(localStorage.getItem('people'))

  if(localStorage.getItem('people') != null){
    const id = uuidv4()
    const person = new Person(name, surname, email, phone, id);
    listPeople.push(person)
    localStorage.setItem('people', JSON.stringify(listPeople))
  }else{
    localStorage.clear()
    const id = uuidv4()
    const person = new Person(name, surname, email, phone, id);
    people.push(person)
    localStorage.setItem('people', JSON.stringify(people))
  }  
  
}

const print = () => {
  const printer = JSON.parse(localStorage.getItem('people'))
  printer.forEach(element => {
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    td1.setAttribute('class', 'col-1')
    td1.textContent = printer.indexOf(element)
    let th1 = document.createElement('th')
    th1.setAttribute('class', 'col-2')
    th1.textContent = element.name
    let th2 = document.createElement('th')
    th2.setAttribute('class', 'col-2')
    th2.textContent = element.surname
    let th3 = document.createElement('th')
    th3.setAttribute('class', 'col-2')
    th3.textContent = element.email
    let th4 = document.createElement('th')
    th4.setAttribute('class', 'col-2')
    th4.textContent = element.phone
    let td2 = document.createElement('td')
    td2.setAttribute('class', 'col-1')

    let button = document.createElement("button")
        button.setAttribute("class", "text-danger")
        button.setAttribute("onclick", `deleteData(${element.id})`)
        button.textContent = "X"

    tr.appendChild(td1);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    td2.appendChild(button)
    tr.appendChild(td2);

    table.appendChild(tr)
  });

}

const deleteData = (id) => {
  const peopleD = JSON.parse(localStorage.getItem('people'))
  const update = peopleD.filter(person => person.id != id)
  localStorage.setItem('people', JSON.stringify(update))
  location.reload()
}

const uuidv4 = () => {
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

btn.addEventListener('click', guardar)

print()


