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

function displayServices(service) {
    const mainSection = document.getElementById('main-section');
    const stringified = JSON.stringify(service)
    const carDiv = document.createElement('div')
    carDiv.innerHTML = `
    <div class="card mt-3 mx-auto" style="max-width: 800px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${service.imageUrl}" class="img-fluid rounded-start h-100" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${service.vehicle}</h5>
                        <p class="card-text">${service.description}</p>
                        <p class="card-text"><small class="text-body-secondary">Fare per kilo: ${service.farePerKilo} </small><small class="text-body-secondary">Capacity: ${service.capacity}</small></p>
                        <!-- Button trigger modal -->
<button "type="button" class="btn btn-primary" data-bs-toggle="modal" onclick='handleBooking(${stringified})'data-bs-target="#exampleModal">
  Launch demo modal
</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    mainSection.appendChild(carDiv)
}
// displayServices(carObject);
// displayServices(luxuryCarObject);
// displayServices(expensiveCarObject);

//the below for loop and while loop executes the same functionality
function displayAllArticles(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element)
        displayServices(element)
    }
    // let i = 0;
    // while (i < arr.length) {
    //     displayServices(luxuryCarObject)
    //     i++
    // }
}
displayAllArticles(servicesArray);

function handleBooking(obj) {
    const modalBody = document.getElementById('modal-body');

    const stringified = JSON.stringify(obj)
    modalBody.innerHTML = `
    <div class="card mx-auto" style="width: 18rem;">
    <img src="${obj.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Vehicle Mode: ${obj.vehicle}</h5>
      <p class="card-text">${obj.description}</p>
      <p class="card-text"><small class="text-body-secondary">Fare per kilo: ${obj.farePerKilo} </small><small class="text-body-secondary">Capacity: ${obj.capacity}</small></p>
      <div class="d-flex flex-column" role="search">

      <p>Fare: <small class="text-muted" id="fare"></small></p>
      <p>Tax: <small class="text-muted" id="tax"></small></p>
      <p>Total Cost: <small class="text-muted" id="total-cost"></small></p>
                    <input class="form-control m-2" id="distance-input"type="number" placeholder="run kilo" aria-label="Search">
                    <input class="form-control m-2" id="quantity-input"type="number"arch" placeholder="car quantity" aria-label="Search">
                    <button class="btn btn-outline-success" id="search-btn"type="submit" onclick='calculateCost(${stringified})'>Submit</button>
                </div>
    </div>
  </div>
   `;
}

function calculateCost(obj) {
    const quantity = document.getElementById('quantity-input').value;
    const distance = document.getElementById('distance-input').value;

    console.log(quantity, distance)
    const fareDiv = document.getElementById("fare");
    console.log(fareDiv);
    fareDiv.innerHTML = quantity * distance * obj.farePerKilo;
    console.log(obj)
}

document.getElementById('search-value').addEventListener('click', function () {
    const value = document.getElementById('search-value').value;
    console.log(value)

    for (let i = 0; i < servicesArray.length; i++) {
        const element = servicesArray[i];
        if (value.toLowerCase() == element.vehicle.toLowerCase()) {
            //console.log(element);
            document.getElementById("main-section").innerHTML = ''
            displayServices(element);
            return;

        }
    }

    alert('nothing found with your search')
})
