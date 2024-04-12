const oracledb = require('oracledb');

async function getRemedyForSymptom(symptomInput) {
    let connection;

    try {
        connection = await oracledb.getConnection({
            user: 'system',
            password: 'Hikaru77',
            connectString: 'DESKTOP-INJHC1C:1522/ORCL'
        });

        const sql = `SELECT remedy FROM diagnosis WHERE symptom = :symptom`;
        const result = await connection.execute(sql, [symptomInput]);

        if (result.rows.length > 0) {
            return result.rows[0][0];
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error occurred:", error);
        return null;
    } finally {
        // Release the Oracle database connection
        if (connection) {
            try {
                await connection.close();
            } catch (error) {
                console.error("Error closing connection:", error);
            }
        }
    }
}

module.exports = { getRemedyForSymptom };

// Example usage:
const symptomInput = "nausea";
getRemedyForSymptom(symptomInput)
    .then(remedy => {
        if (remedy) {
            console.log(`Suggested Remedy for ${symptomInput}:\n ${remedy}`);
        } else {
            console.log(`No remedy found for ${symptomInput}`);
        }
    })
    .catch(error => console.error("Error:", error));