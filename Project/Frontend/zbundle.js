// Copyright (c) 2015, 2023, Oracle and/or its affiliates.

//-----------------------------------------------------------------------------
//
// This software is dual-licensed to you under the Universal Permissive License
// (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl and Apache License
// 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose
// either license.
//
// If you elect to accept the software under the Apache License, Version 2.0,
// the following applies:
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//-----------------------------------------------------------------------------








const remediesData = {
    "headache": [`Suggested Remedies for headache are : Stay adequately hydrated and take rest |
    Take ibuprofen or Aspirin after your meal | Apply a cold compress./ 
    Suggested medicines :/
    - Tylenol (325mg - 1000mg every 4-6 hours, maximum 4000mg per day)/
    - Excedrin (2 tablets every 6 hours as needed, maximum 8 tablets per day)/
    - Advil (200mg - 400mg every 4-6 hours, maximum 1200mg per day)/
    `],

    "fatigue": [`Suggested Remedies for fatigue are : Take adequate 7-8 hours of sleep | Eat a balanced diet rich in fruits, vegetables, 
    whole grains, and lean proteins | Avoid excessive caffeine, sugary foods, and heavy meals, especially close to bedtime. 
    | Practice stress-reduction techniques./
    Suggested medicines :/
    - Caffeine tablets (100mg - 200mg as needed, maximum 400mg per day)/
    - Vitamin B12 supplements (1000mcg per day)/
    - Iron supplements (65mg - 325mg per day, as directed by a healthcare provider)/`],

    "muscle pain": [`Suggested Remedies for muscle pain are : Apply a hot or cold compress | Non-prescription pain relievers such as acetaminophen (Tylenol), 
    ibuprofen (Advil, Motrin), or naproxen (Aleve) can help reduce pain and inflammation
    | Hydration, restorative sleep and a good massage will boost the recovery./ 
    Suggested medicines :/
    - Tylenol Muscle Aches & Body Pain (500mg - 1000mg every 4-6 hours, maximum 4000mg per day)/
    - Aleve (220mg every 8-12 hours as needed, maximum 660mg per day)/ `],

    "fever": [`Suggested Remedies for fever are : Stay hydrated and use a cool compress | 
    Get sufficient rest to allow your body to focus on fighting the underlying cause of the fever |
    Take paracetamol or dolo tablets for instant relief |
    Regularly check your body temperature./
    Suggested medicines : /
    - Paracetamol (500mg - 1000mg every 4-6 hours, maximum 4000mg per day)/
    - Ibuprofen (200mg - 400mg every 4-6 hours, maximum 1200mg per day)/
    - Aspirin (325mg - 650mg every 4 hours, maximum 4000mg per day)/
  `],

    "cough": [`Suggested Remedies for cough are : Drink warm fluids and Gargle with warm saltwater to soothe a sore throat and reduce irritation |
    Honey can be soothing for coughs. You can mix it with warm water or herbal tea |
    Inhaling steam from a bowl of hot water can help relieve congestion and soothe a cough./
    Suggested medicines :/
    - Robitussin (10ml every 4 hours as needed, maximum 6 doses per day)/
    - Delsym (5ml every 12 hours as needed, maximum 2 doses per day)/ `],

    "dizziness": [`Suggested Remedies for dizziness are : Sit or lie down | Hydrate | Avoid sudden movements./Suggested medicines : /
    - Meclizine (25mg every 6-8 hours as needed, maximum 75mg per day)/
    - Dramamine (50mg every 4-6 hours as needed, maximum 200mg per day)/
    - Antivert (25mg every 6-8 hours as needed, maximum 100mg per day)/`],

    "insomnia": [`Suggested Remedies for insomnia are : Establish a bedtime routine | Limit screen time before bed | Create a comfortable sleep environment. /
    Suggested medicines : /
    -Melatonin (1mg - 10mg 30 minutes before bedtime)/
    - Diphenhydramine (25mg - 50mg 30 minutes before bedtime)/
    - Zolpidem (5mg - 10mg once daily before bedtime)/`],

    "diarrhea": [`Suggested Remedies for diarrhea are : Stay hydrated | Eat bland foods | Avoid dairy and caffeine. /
    Suggested medicines : /
    - Imodium (4mg after the first loose stool, then 2mg after each subsequent loose stool, maximum 16mg per day)/
    - Pepto-Bismol (525mg every 30-60 minutes as needed, maximum 8 doses per day)/
    - Loperamide (4mg after the first loose stool, then 2mg after each subsequent loose stool, maximum 16mg per day)/`],

    "shortness of breath": [`Suggested Remedies are : Practice deep breathing | Sit up straight | Use a fan. /Suggested medicinea :/
    - Albuterol inhaler (as directed by a healthcare provider)/
    - Prednisone (40mg once daily for 5 days, then taper as directed)/ `],

    "abdominal pain": [`Suggested Remedies for abdominal pain are : Apply a hot water bottle | Take over-the-counter pain relievers | Rest. /
    Suggested medicines :/
    - Buscopan (10mg, 1 tablet every 6 hours, maximum 4 tablets per day)/
    - Pepto-Bismol (525mg, 2 tablets every 30-60 minutes as needed, maximum 8 doses per day)/
    - Drotaverine (40mg - 80mg, 1-2 tablets every 8 hours, maximum 240mg per day)/ `],

    "irritability": [`uggested Remedies for irritabilty are : Practice relaxation techniques | Take breaks | Talk to someone. /
    Suggested medicines :/ 
    - Prozac (20mg - 80mg once daily)/
    - Zoloft (50mg - 200mg once daily)/
    - Xanax (0.25mg - 0.5mg every 8 hours as needed)/`],

    "joint pain": [`Suggested Remedies for joint pain  are : Apply hot or cold packs | Take over-the-counter anti-inflammatory drugs | Do gentle exercises./
    Suggested medicines : /
    - Celebrex (100mg - 200mg once daily)/
    - Glucosamine (1500mg once daily)/
    - Voltaren (1% gel, apply 2g to affected area 4 times daily)/`],

    "rash": [`Suggested Remedies for rash are : Keep the area clean | Apply a soothing lotion | Avoid scratching./ Suggested medicines : /
    - Hydrocortisone cream (apply a thin layer to affected area 3-4 times daily)/
    - Calamine lotion (apply to affected area as needed)/
    - Antihistamine (e.g., Benadryl) (25mg - 50mg every 4-6 hours as needed)/`],

    "head congestion": [`Suggested Remedies for head congestion are :  Use a saline nasal spray | Drink warm fluids | Take over-the-counter decongestants. /
    Suggested medicines : /
    - Sudafed (30mg - 60mg every 4-6 hours as needed, maximum 240mg per day)/
    - Mucinex (1200mg every 12 hours, maximum 2400mg per day)/
    - Phenylephrine (10mg every 4 hours as needed, maximum 60mg per day)/`],

    "sweating": [`Suggested Remedies for sweating are : Wear breathable clothing | Use antiperspirant | Keep cool./ Suggested medicines : /
    - Aluminum chloride (antiperspirant) (apply to affected area at bedtime and wash off in the morning)/
    - Drysol (apply to affected area at bedtime and wash off in the morning)/
    - Certain Dri (apply to affected area at bedtime and wash off in the morning)/');
`],

    "weight gain": [`Suggested Remedies for weight gain are : Maintain a healthy diet | Exercise regularly | Get enough sleep./ 
    Suggested medicines :/ 
    - Orlistat (120mg with each main meal containing fat)/
    - Phentermine (15mg - 37.5mg once daily before breakfast or 1-2 hours after breakfast)/
    - Metformin (500mg - 1000mg twice daily with meals)/`],

    "bloating": [`Eat smaller meals | Avoid gas-producing foods | Stay physically active./ 
    Suggested medicines : /
    - Gas-X (125mg - 250mg every 4 hours as needed, maximum 500mg per day)/
    - Beano (take 2-3 tablets with meals)/
    - Simethicone (40mg - 125mg every 4 hours as needed)/`],

    "mood swings": [`Suggested Remedies for swings are : Practice stress management | Get regular exercise | Talk to a therapist. /
    Suggested medicines :/
    - Prozac (20mg - 80mg once daily)/
    - Zoloft (50mg - 200mg once daily)/
    - Lexapro (10mg - 20mg once daily)/ `],

    "memory loss": [`Suggested Remedies for memory loss are : Stay mentally active | Get enough sleep | Eat a healthy diet. /
    Suggested medicines :/
    - Donepezil (5mg - 10mg once daily)/
    - Memantine (5mg - 10mg twice daily)/
    - Rivastigmine (3mg - 12mg twice daily)/ `],

    "difficulty in concentrating": [`Suggested Remedies for difficulty in concentrating are : Take regular breaks | Create a focused work environment | Stay hydrated./ 
    Suggested medicines : /
    - Adderall (5mg - 30mg once daily)/
    - Ritalin (5mg - 20mg twice daily)/
    - Modafinil (100mg - 200mg once daily)/`],

    "cold and flu": [`Suggested Remedies for cold and flu are : Eat a well-balanced diet, including fruits, vegetables, and grains | Steam inhalation, take rest and keep yourself hydrated | 
    Can take cheston cold cough syrup or tablet for instant relief./ 
    Suggested medicines :/
    - NyQuil (30ml every 6 hours as needed)/
    - DayQuil (30ml every 4 hours as needed)/
    - Theraflu (packet mixed with hot water every 4 hours as needed)/ `],

    "nausea": [`Suggested Remedies for nausea  are : Take BRAT diet which are bland foods that may help settle the stomach | 
    Peppermint tea or peppermint candies may help soothe the stomach and alleviate nausea./ 
    Suggested medicines :/
    - Ondansetron (4mg - 8mg every 8 hours as needed)/
    - Promethazine (12.5mg - 25mg every 4-6 hours as needed)/
    - Metoclopramide (10mg - 20mg every 6 hours as needed)/ `],

    "vomitting": [`Suggested Remedies for vomitting  are : Take BRAT diet which are bland foods that may help settle the stomach | 
    Peppermint tea or peppermint candies may help soothe the stomach and alleviate nausea./ 
    Suggested medicines : /
    - Ondansetron (4mg - 8mg every 8 hours as needed)/
    - Promethazine (12.5mg - 25mg every 4-6 hours as needed)/
    - Metoclopramide (10mg - 20mg every 6 hours as needed)/`],
};

let suggestions = [
    "headache", "diarrhea", "fever", "fatigue", "cold and flu", "nausea", "muscle pain", "cough", "dizziness", "shortness of breath", "insomnia", "abdominal pain", "irritability", "joint pain", "rash", "head congestion", "sweating", "weight gain", "bloating", "mood swings", "memory loss", "difficulty in concentrating", "vomitting"
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
            searchRemedies();
            searchWrapper.classList.remove("active");
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
        searchWrapper.classList.remove("active");
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
            remedy.split('/').forEach(part => {
                const paragraph = document.createElement('p');
                paragraph.textContent = part.trim();
                remedyItem.appendChild(paragraph);
            });
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
