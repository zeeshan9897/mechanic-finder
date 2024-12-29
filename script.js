const mechanics = [];

// Register a mechanic
document.getElementById("mechanic-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;
    const contact = document.getElementById("contact").value;

    const mechanic = { name, location, contact };
    mechanics.push(mechanic);

    alert("Mechanic Registered Successfully!");

    // Clear the form
    document.getElementById("mechanic-form").reset();
});

// Search for a mechanic
document.getElementById("search-btn").addEventListener("click", function () {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const mechanicList = document.getElementById("mechanic-list");

    mechanicList.innerHTML = "";

    const filteredMechanics = mechanics.filter(mechanic =>
        mechanic.location.toLowerCase().includes(searchInput)
    );

    if (filteredMechanics.length > 0) {
        filteredMechanics.forEach(mechanic => {
            const li = document.createElement("li");
            li.textContent = `${mechanic.name} - ${mechanic.location} - ${mechanic.contact}`;
            mechanicList.appendChild(li);
        });
    } else {
        mechanicList.innerHTML = "<li>No mechanics found</li>";
    }
});
