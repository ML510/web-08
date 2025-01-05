class customer {
    name;
    age;
    address;

    // customer (name,age,address){
    //     this.name = name;
    //     this.age = age;
    //     this.address = address;
    // }
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    setaName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

let customer01 = new customer("Kamal", 12, "Panadura");

console.log(customer01.name);

let randomNumber = Math.floor((Math.random() * 10) + 1);

console.log(randomNumber);

//-----------------------------------------GAME------------------------------

function ges() {
    let randomvalue = randomNumber;

    let txtvalue = document.getElementById("textNumber").value

    let label = document.getElementById("labelthis")

    if (randomvalue < txtvalue) {
        label.innerHTML = "-"

    } else if (randomvalue > txtvalue) {
        label.innerHTML = "+"

    } else {
        label.innerHTML = "= 🤑"
    }
}

//---------------------------------Array add Object / Object add Array---------------------

let customers = [
    {
        name: "Nimal",
        age: 12,
        address: "Panadura"
    },
    12,
    [
        {
            name: "Amal"
        },
        {
            name: 'Kamal'
        },
        {
            name: "Sunil"
        }
    ],
    "Vimal",
    {},
    {},
    {}
]

console.log(customers);

//----------------Chatch name-----------

//--- Step i -------------
customers[2].forEach(obj => {
    console.log(obj.name);

});

//---Step ii ------------
customers[2].forEach(obj => {
    console.log(obj['nam']);
    // 'nam' = name

});

let isTrue = (5 == '5'); // double eqvals cheking varibal -value-

let isTruel = (5 === '5'); // threbal eqvals cheking varibal -value- and -type- 

console.log(isTrue); //true

console.log(isTruel); //false

