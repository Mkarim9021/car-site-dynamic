var carObject = {
    vehicle: "Porsche",
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    farePerKilo: 3,
    capacity: 4,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem quas beatae similique maiores iusto et deleniti? Animi delectus dolores numquam harum rerum dolor culpa dicta itaque atque, enim amet!"

}
var luxuryCarObject = {
    vehicle: "Lamborghini",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    farePerKilo: 15,
    capacity: 2,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem quas beatae similique maiores iusto et deleniti? Animi delectus dolores numquam harum rerum dolor culpa dicta itaque atque, enim amet!"

}
var expensiveCarObject = {
    vehicle: "Tesla",
    imageUrl: "https://images.unsplash.com/photo-1576221162298-3d9f04e9f661?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    farePerKilo: 15,
    capacity: 4,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem quas beatae similique maiores iusto et deleniti? Animi delectus dolores numquam harum rerum dolor culpa dicta itaque atque, enim amet!"

}

const servicesArray = [carObject, luxuryCarObject, expensiveCarObject]

var value = "Bus";

for (let i = 0; i < servicesArray.length; i++) {
    const element = servicesArray[i];
    if (value === element.vehicle) {
        console.log(element);
    }
}

