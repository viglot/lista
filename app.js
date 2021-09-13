const todos = ["Gå till skolan", "Programmera", "Köpa mat" ];

for (let i = 0; i < 1; i++) {
let li = document.createElement('li')
li.textContent = 'Gå till skolan';
list.appendChild(li);
}

for (let i = 1; i < 2; i++) {
    let li = document.createElement('li')
    li.textContent = 'Programmera';
    list.appendChild(li);
    }

    for (let i = 2; i < 3; i++) {
        let li = document.createElement('li')
        li.textContent = 'Köpa Mat';
        list.appendChild(li);
        }