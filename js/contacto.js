//dark mode

const darkMode = () => {
  document.getElementsByTagName("body")[0].style = "background-color: black"

  for (let i = 0; i < document.getElementsByTagName("h1").length; i++) {
      document.getElementsByTagName("h1")[i].style = "color: white"
  }
  for (let i = 0; i < document.getElementsByTagName("p").length; i++) {
      document.getElementsByTagName("p")[i].style = "color: white"
  }
  for (let i = 0; i < document.getElementsByTagName("h2").length; i++) {
    document.getElementsByTagName("h2")[i].style = "color: white"
}


  localStorage.setItem("theme", "dark")
}


const lightMode = () => {
  document.getElementsByTagName("body")[0].style = "background-color: white"

  for (let i = 0; i < document.getElementsByTagName("h1").length; i++) {
      document.getElementsByTagName("h1")[i].style = "color: black"
  }
  for (let i = 0; i < document.getElementsByTagName("p").length; i++) {
      document.getElementsByTagName("p")[i].style = "color: black"
  }
  for (let i = 0; i < document.getElementsByTagName("h2").length; i++) {
    document.getElementsByTagName("h2")[i].style = "color: black"
}

  localStorage.setItem("theme", "ligth")
}


document.getElementById("theme").addEventListener("click", () => {
  if (localStorage.getItem("theme") === "dark") {
      lightMode()
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


