const remediesData = {
    "headache": ["Suggested Remedy:", "1) Stay adequately hydrated and take rest", "2) Take ibuprofen or Aspirin after your meal", "3) Apply a cold compress"],
    "fatigue": ["Suggested Remedy:", "1) Take adequate 7-8 hours of sleep.", "2) Aim for at least 30 minutes of moderate exercise most days of the week, but consult with a healthcare provider before starting any new exercise regimen.", "3) Eat a balanced diet rich in fruits, vegetables, whole grains, and lean proteins. Avoid excessive caffeine, sugary foods, and heavy meals, especially close to bedtime.", "4) Practice stress-reduction techniques such as mindfulness meditation, deep breathing exercises, yoga, or spending time in nature."],
    "muscle pain": ["Suggested Remedy:", "1) Apply a hot or cold compress", "2) Non-prescription pain relievers such as acetaminophen (Tylenol), ibuprofen (Advil, Motrin), or naproxen (Aleve) can help reduce pain and inflammation.", "3) Hydration, restorative sleep and a good massage will boost the recovery."],
    "fever": ["Suggested Remedy:", "1) Stay hydrated and use a cool compress.", "2) Get sufficient rest to allow your body to focus on fighting the underlying cause of the fever.", "3) Take paracetamol or dolo tablets for instant relief.", "4) Regularly check your body temperature to track the effectiveness of the fever-reducing methods."],
    "cough and blocked nose": ["Suggested Remedy:", "1) Drink warm fluids and Gargle with warm saltwater to soothe a sore throat and reduce irritation.", "2) Honey can be soothing for coughs. You can mix it with warm water or herbal tea. ", "3) Inhaling steam from a bowl of hot water or taking a hot shower can help relieve congestion and soothe a cough."],
    "dizziness": ["Suggested Remedy:", "1) Sit or lie down", "2) Hydrate", "3) Avoid sudden movements"],
    "shortness of breath": ["Suggested Remedy:", "1) Practice deep breathing", "2) Sit up straight", "3) Use a fan"],
    "insomnia": ["Suggested Remedy:", "1) Establish a bedtime routine", "2) Limit screen time before bed", "3) Create a comfortable sleep environment"],
    "diarrhea": ["Suggested Remedy:", "1) Stay hydrated", "2) Eat bland foods", "3) Avoid dairy and caffeine"],
    "abdominal pain": ["Suggested Remedy:", "1) Apply a hot water bottle", "2) Take over-the-counter pain relievers", "3) Rest"],
    "irritability": ["Suggested Remedy:", "1) Practice relaxation techniques", "2) Take breaks", "3) Talk to someone"],
    "joint pain": ["Suggested Remedy:", "1) Apply hot or cold packs", "2) Take over-the-counter anti-inflammatory drugs", "3) Do gentle exercises"],
    "rash": ["Suggested Remedy:", "1) Keep the area clean", "2) Apply a soothing lotion", "3) Avoid scratching"],
    "head congestion": ["Suggested Remedy:", "1) Use a saline nasal spray", "2) Drink warm fluids", "3) Take over-the-counter decongestants"],
    "sweating": ["Suggested Remedy:", "1) Wear breathable clothing", "2) Use antiperspirant", "3) Keep cool"],
    "weight gain": ["Suggested Remedy:", "1) Maintain a healthy diet", "2) Exercise regularly", "3) Get enough sleep"],
    "bloating": ["Suggested Remedy:", "1) Eat smaller meals", "2) Avoid gas-producing foods", "3) Stay physically active"],
    "mood swings": ["Suggested Remedy:", "1) Practice stress management", "2) Get regular exercise", "3) Talk to a therapist"],
    "memory loss": ["Suggested Remedy:", "1) Stay mentally active", "2) Get enough sleep", "3) Eat a healthy diet"],
    "difficulty in concentrating": ["Suggested Remedy:", "1) Take regular breaks", "2) Create a focused work environment", "3) Stay hydrated"],
    "cold and flu": ["Suggested Remedy:", "1) Eat a well-balanced diet, including fruits, vegetables, and grains.", "2) Steam inhalation, take rest and keep yourself hydrated.", "3) Can take cheston cold cough syrup or tablet for instant relief."],
    "nausea": ["Suggested Remedy:", "1) Take BRAT diet that consists of bananas, rice, applesauce, and toast, which are bland foods that may help settle the stomach.", "2) Applying pressure to specific acupressure points, such as the P6 point on the wrist (also known as the Nei-Kuan point), may help relieve nausea.", "3) Peppermint tea or peppermint candies may help soothe the stomach and alleviate nausea.", "4) Chlorpromazine and Metoclopramide tablets can be taken for quick relief after the meal."],
    "vomitting": ["Suggested Remedy:", "1) Take BRAT diet that consists of bananas, rice, applesauce, and toast, which are bland foods that may help settle the stomach.", "2) Applying pressure to specific acupressure points, such as the P6 point on the wrist (also known as the Nei-Kuan point), may help relieve nausea.", "3) Peppermint tea or peppermint candies may help soothe the stomach and alleviate nausea.", "4) Chlorpromazine and Metoclopramide tablets can be taken for quick relief after the meal."],
};

let suggestions = [
    "headache", "diarrhea", "fever", "fatigue", "cold and flu", "nausea", "muscle pain", "cough and blocked nose", "dizziness", "shortness of breath", "insomnia", "abdominal pain", "irritability", "joint pain", "rash", "head congestion", "sweating", "weight gain", "bloating", "mood swings", "memory loss", "difficulty in concentrating", "vomitting"
];

const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

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

function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = () => {
        searchRemedies()
    }
    searchWrapper.classList.remove("active");
}

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

function searchRemedies() {
    const symptomInput = document.getElementById('symptomInput').value.toLowerCase();
    const remediesContainer = document.getElementById('remediesContainer');
    remediesContainer.innerHTML = '';

    if (symptomInput.trim() === '') {
        alert('Please enter a symptom.');
        return;
    }

    if (remediesData.hasOwnProperty(symptomInput)) {
        const remedies = remediesData[symptomInput];
        const remediesList = document.createElement('ul');

        remedies.forEach(remedy => {
            const remedyItem = document.createElement('li');
            remedyItem.textContent = remedy;
            remediesList.appendChild(remedyItem);
        });

        remediesContainer.appendChild(remediesList);
        remediesContainer.style.display = 'block';
    } else {
        remediesContainer.textContent = 'No remedies found for this symptom.';
        remediesContainer.style.display = 'block';
    }
}

document.addEventListener('click', function (event) {
    const isClickInside = searchWrapper.contains(event.target);
    if (!isClickInside) {
        searchWrapper.classList.remove("active");
    }
});