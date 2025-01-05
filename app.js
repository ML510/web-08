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

    getName(){
        return this.name;
    }
}

let customer01 = new customer("Kamal",12,"Panadura");

console.log(customer01.name);
