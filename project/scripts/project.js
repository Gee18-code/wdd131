const vehicles = [
    {
        name: `2021 Lexus RX 350`,
        type: `Luxury SUV`,
        price: 45000000,
        image: `images/lexus-rx350.jpeg`,
        description: `A comfortable luxury SUV with modern features and strong performance.`
    },
    {
        name: `2020 Toyota Camry`,
        type: `Sedan`,
        price: 28000000,
        image: `images/toyota-camry.jpeg`,
        description: `A reliable sedan offering comfort, style, and everyday performance.`
    },
    {
        name: `2022 Mercedes-Benz C-Class`,
        type: `Luxury Sedan`,
        price: 55000000,
        image: `images/mercedes-c-class.jpeg`,
        description: `A premium sedan featuring elegant styling and modern technology.`
    },
    {
        name: `2021 Toyota Land Cruiser`,
        type: `SUV`,
        price: 65000000,
        image: `images/land-cruiser.jpg`,
        description: `A powerful SUV designed for comfort, capability, and long-distance driving.`
    }
];

function formatPrice(price) {
    return `₦${price.toLocaleString()}`;
}

function displayVehicles(vehicleArray) {
    const vehicleList = document.querySelector(`#vehicle-list`);

    if (!vehicleList) {
        return;
    }

    if (vehicleArray.length === 0) {
        vehicleList.innerHTML = `
            <p>No vehicles match your search.</p>
        `;
        return;
    }

   vehicleList.innerHTML = vehicleArray.map((vehicle) => `
    <article class="vehicle-card">
        <img
            src="${vehicle.image}"
            alt="${vehicle.name}"
            loading="lazy"
        >
        <p class="section-label">${vehicle.type}</p>
        <h2>${vehicle.name}</h2>
        <p>${vehicle.description}</p>
        <p><strong>${formatPrice(vehicle.price)}</strong></p>
        <a class="button" href="contact.html">Make an Inquiry</a>
        </article>
    `).join(``);
}

function setupVehicleSearch() {
    const searchInput = document.querySelector(`#vehicle-search`);

    if (!searchInput) {
        return;
    }

    searchInput.addEventListener(`input`, () => {
        const searchTerm = searchInput.value.toLowerCase();

        const filteredVehicles = vehicles.filter((vehicle) =>
            vehicle.name.toLowerCase().includes(searchTerm)
        );

        displayVehicles(filteredVehicles);
    });
}

function setupContactForm() {
    const form = document.querySelector(`form`);

    if (!form) {
        return;
    }

    form.addEventListener(`submit`, (event) => {
        event.preventDefault();

        const name = document.querySelector(`#name`).value;
        const email = document.querySelector(`#email`).value;

        localStorage.setItem(`geeCustomerName`, name);
        localStorage.setItem(`geeCustomerEmail`, email);

        alert(`Thank you, ${name}! Your inquiry has been received.`);
        form.reset();
    });
}

function initializeSite() {
    displayVehicles(vehicles);
    setupVehicleSearch();
    setupContactForm();
}

initializeSite();

