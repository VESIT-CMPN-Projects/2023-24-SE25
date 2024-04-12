const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

let suggestions = [
    "headache", "diarrhea", "fever", "fatigue", "cold and flu", "nausea", "muscle pain", "cough and blocked nose", "dizziness", "shortness of breath", "insomnia", "abdominal pain", "irritability", "joint pain", "rash", "head congestion", "sweating", "weight gain", "bloating", "mood swings", "memory loss", "difficulty in concentrating", "vomitting"
];

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

inputBox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchRemedies();
        searchWrapper.classList.remove("active");
    }
});

function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = () => {
        searchRemedies()
    }
    searchWrapper.classList.remove("active");
}

inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {
        icon.onclick = () => {
            searchRemedies()
        }
        emptyArray = suggestions.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active");
        const remediesContainer = document.getElementById('remediesContainer');
        remediesContainer.style.display = 'none';
    }
}

// script2.js :

async function searchRemedies() {
    const symptomInput = inputBox.value.toLowerCase();
    const remediesContainer = document.getElementById('remediesContainer');
    remediesContainer.innerHTML = '';

    if (symptomInput.trim() === '') {
        alert('Please enter a symptom.');
        return;
    }

    try {
        const { getRemedyForSymptom } = require('./index.js');
        const remedy = await getRemedyForSymptom(symptomInput);
        if (remedy) {
            remediesContainer.innerHTML = `<p>Suggested Remedy for ${symptomInput}:</p><p>${remedy}</p>`;
            remediesContainer.style.display = 'block';
        } else {
            remediesContainer.innerHTML = `<p>No remedy found for ${symptomInput}.</p>`;
            remediesContainer.style.display = 'block';
        }
    } catch (error) {
        console.error("Error:", error);
    }

    // Hide suggestion box
    searchWrapper.classList.remove("active");
}

// Hide suggestion box when search icon is clicked
icon.onclick = () => {
    searchRemedies();
};

// Hide suggestion box when a suggestion is clicked
suggBox.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        select(event.target);
    }
});

document.addEventListener('click', function (event) {
    const isClickInside = searchWrapper.contains(event.target);
    if (!isClickInside) {
        searchWrapper.classList.remove("active");
    }
});



