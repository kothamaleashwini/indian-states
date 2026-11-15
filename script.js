// Indian States and Their Specialities

const states = [
	{
		name: "Andhra Pradesh",
		capital: "Amaravati",
		food: "Pulihora",
		speciality: "Kuchipudi Dance"
	},
	{
		name: "Arunachal Pradesh",
		capital: "Itanagar",
		food: "Thukpa",
		speciality: "Beautiful Mountains"
	},
	{
		name: "Assam",
		capital: "Dispur",
		food: "Masor Tenga",
		speciality: "Assam Tea"
	},
	{
		name: "Bihar",
		capital: "Patna",
		food: "Litti Chokha",
		speciality: "Madhubani Paintings"
	},
	{
		name: "Chhattisgarh",
		capital: "Raipur",
		food: "Chila",
		speciality: "Tribal Culture"
	},
	{
		name: "Goa",
		capital: "Panaji",
		food: "Goan Fish Curry",
		speciality: "Beaches"
	},
	{
		name: "Gujarat",
		capital: "Gandhinagar",
		food: "Dhokla",
		speciality: "Garba Dance"
	},
	{
		name: "Haryana",
		capital: "Chandigarh",
		food: "Bajra Khichdi",
		speciality: "Traditional Folk Culture"
	},
	{
		name: "Himachal Pradesh",
		capital: "Shimla",
		food: "Dham",
		speciality: "Hill Stations"
	},
	{
		name: "Jharkhand",
		capital: "Ranchi",
		food: "Dhuska",
		speciality: "Mineral Resources"
	},
	{
		name: "Karnataka",
		capital: "Bengaluru",
		food: "Bisi Bele Bath",
		speciality: "Mysore Palace"
	},
	{
		name: "Kerala",
		capital: "Thiruvananthapuram",
		food: "Appam",
		speciality: "Backwaters"
	},
	{
		name: "Madhya Pradesh",
		capital: "Bhopal",
		food: "Poha",
		speciality: "Khajuraho Temples"
	},
	{
		name: "Maharashtra",
		capital: "Mumbai",
		food: "Vada Pav",
		speciality: "Ajanta Caves"
	},
	{
		name: "Manipur",
		capital: "Imphal",
		food: "Eromba",
		speciality: "Manipuri Dance"
	},
	{
		name: "Meghalaya",
		capital: "Shillong",
		food: "Jadoh",
		speciality: "Living Root Bridges"
	},
	{
		name: "Mizoram",
		capital: "Aizawl",
		food: "Bai",
		speciality: "Cheraw Dance"
	},
	{
		name: "Nagaland",
		capital: "Kohima",
		food: "Smoked Pork",
		speciality: "Hornbill Festival"
	},
	{
		name: "Odisha",
		capital: "Bhubaneswar",
		food: "Dalma",
		speciality: "Jagannath Temple"
	},
	{
		name: "Punjab",
		capital: "Chandigarh",
		food: "Makki di Roti and Sarson da Saag",
		speciality: "Bhangra Dance"
	},
	{
		name: "Rajasthan",
		capital: "Jaipur",
		food: "Dal Baati Churma",
		speciality: "Desert Culture"
	},
	{
		name: "Sikkim",
		capital: "Gangtok",
		food: "Momos",
		speciality: "Kanchenjunga"
	},
	{
		name: "Tamil Nadu",
		capital: "Chennai",
		food: "Idli and Dosa",
		speciality: "Bharatanatyam Dance"
	},
	{
		name: "Telangana",
		capital: "Hyderabad",
		food: "Hyderabadi Biryani",
		speciality: "Charminar"
	},
	{
		name: "Tripura",
		capital: "Agartala",
		food: "Mui Borok",
		speciality: "Bamboo Handicrafts"
	},
	{
		name: "Uttar Pradesh",
		capital: "Lucknow",
		food: "Awadhi Biryani",
		speciality: "Taj Mahal"
	},
	{
		name: "Uttarakhand",
		capital: "Dehradun",
		food: "Kafuli",
		speciality: "Himalayan Mountains"
	},
	{
		name: "West Bengal",
		capital: "Kolkata",
		food: "Rasgulla",
		speciality: "Durga Puja"
	}
];

// Display all states on the website

const container = document.getElementById("state-container");

function displayStates(stateList) {
	container.innerHTML = "";

	stateList.forEach(state => {
		const card = document.createElement("div");

		card.className = "state-card";

		card.innerHTML = `
			<h3>${state.name}</h3>
			<p><strong>Capital:</strong> ${state.capital}</p>
			<p><strong>Famous Food:</strong> ${state.food}</p>
			<p><strong>Speciality:</strong> ${state.speciality}</p>
		`;

		container.appendChild(card);
	});
}

// Search states

const searchBox = document.getElementById("search");

searchBox.addEventListener("input", function() {
	const searchText = searchBox.value.toLowerCase();

	const filteredStates = states.filter(state =>
		state.name.toLowerCase().includes(searchText)
	);

	displayStates(filteredStates);
});

// Show all states when website opens

displayStates(states);
