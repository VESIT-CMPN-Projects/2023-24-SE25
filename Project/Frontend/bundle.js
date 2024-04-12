(function () {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                var p = n[i] = { exports: {} };
                e[i][0].call(p.exports, function (r) {
                    var n = e[i][1][r];
                    return o(n || r)
                }, p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }
        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        return o
    }
    return r
})()({
    1: [function (require, module, exports) {

    }, {}],
    2: [function (require, module, exports) {
        // Import oracledb module
        const oracledb = require('oracledb');

        async function getRemedyForSymptom(symptomInput) {
            try {
                const connection = await oracledb.getConnection({
                    user: 'system',
                    password: 'Hikaru77',
                    connectString: 'DESKTOP-INJHC1C:1522/ORCL'
                });

                const sql = `SELECT remedy FROM diagnosis WHERE symptom = :symptom`;
                console.log('Executing SQL query:', sql);

                const result = await connection.execute(sql, { symptom: symptomInput });

                console.log('Query result:', result);

                if (result.rows.length > 0) {
                    return result.rows[0][0];
                } else {
                    return null;
                }
            } catch (error) {
                console.error("Error occurred:", error);
                return null;
            }
        }
        module.exports = { getRemedyForSymptom };

    }, { "oracledb": 3 }],
    3: [function (require, module, exports) {
    }, {}],
    4: [function (require, module, exports) {
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
        function select(element) {
            let selectData = element.textContent;
            inputBox.value = selectData;
            icon.onclick = () => {
                searchRemedies()
            }
            searchWrapper.classList.remove("active");
        }
        // for disappearing container :
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
        async function searchRemedies() {
            const symptomInput = inputBox.value.toLowerCase();
            const remediesContainer = document.getElementById('remediesContainer');
            remediesContainer.innerHTML = '';

            if (symptomInput.trim() === '') {
                alert('Please enter a symptom.');
                return;
            }

            try {
                const { getRemedyForSymptom } = require('./index.js'); // Corrected the path
                const remedy = await getRemedyForSymptom(symptomInput);
                if (remedy) {
                    remediesContainer.innerHTML = `<p>Suggested Remedies for ${symptomInput}:</p><p>${remedy}</p>`;
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

    }, { "./index.js": 2 }]
}, {}, [4]);
