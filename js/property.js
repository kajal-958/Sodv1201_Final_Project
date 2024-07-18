document.addEventListener('DOMContentLoaded', function () {
    const propertyForm = document.getElementById('property-form');
    const propertiesDiv = document.getElementById('properties');

    // Load properties from local storage
    let properties = JSON.parse(localStorage.getItem('properties')) || [];
    displayProperties();

    propertyForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('property-name').value;
        const address = document.getElementById('property-address').value;
        const area = document.getElementById('property-area').value;
        const type = document.getElementById('property-type').value;
        const capacity = document.getElementById('property-capacity').value;
        const parking = document.getElementById('property-parking').checked;
        const publicTransport = document.getElementById('property-public-transport').checked;
        const availability = document.getElementById('property-availability').checked;
        const rentalTerm = document.getElementById('property-rental-term').value;
        const price = document.getElementById('property-price').value;

        const property = {
            name, address, area, type, capacity, parking, publicTransport, availability, rentalTerm, price
        };

        properties.push(property);
        localStorage.setItem('properties', JSON.stringify(properties));
        displayProperties();
        propertyForm.reset();
    });

    function displayProperties() {
        propertiesDiv.innerHTML = '';

        properties.forEach((property, index) => {
            const propertyDiv = document.createElement('div');
            propertyDiv.classList.add('property');
            propertyDiv.innerHTML = `
                <h3>${property.name}</h3>
                <p>Address: ${property.address}</p>
                <p>Area: ${property.area} sq meters</p>
                <p>Type: ${property.type}</p>
                <p>Capacity: ${property.capacity} people</p>
                <p>Includes Parking: ${property.parking ? 'Yes' : 'No'}</p>
                <p>Reachable by Public Transport: ${property.publicTransport ? 'Yes' : 'No'}</p>
                <p>Currently Available: ${property.availability ? 'Yes' : 'No'}</p>
                <p>Rental Term: ${property.rentalTerm}</p>
                <p>Price: $${property.price} per ${property.rentalTerm}</p>
                <button onclick="removeProperty(${index})">Remove</button>
            `;
            propertiesDiv.appendChild(propertyDiv);
        });
    }

    window.removeProperty = function (index) {
        properties.splice(index, 1);
        localStorage.setItem('properties', JSON.stringify(properties));
        displayProperties();
    };
});
