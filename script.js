        let subjectCount = 4;

        function addSubject() {
            subjectCount++;

            const div = document.createElement("div");
            div.className = "subject";

            div.innerHTML = `
                <input type="number" step="0.01" min="0" max="4"
                placeholder="Enter GPA for Subject ${subjectCount}">
            `;

            document.getElementById("subjects").appendChild(div);
        }

        function calculateCGPA() {
            const inputs = document.querySelectorAll("#subjects input");
            let total = 0;
            let count = 0;

            inputs.forEach(input => {
                let value = parseFloat(input.value);

                if (!isNaN(value) && value >= 0 && value <= 4) {
                    total += value;
                    count++;
                }
            });

            if (count === 0) {
                document.getElementById("result").innerHTML =
                    "Please enter GPA values.";
                return;
            }

            let cgpa = (total / count).toFixed(2);

            document.getElementById("result").innerHTML =
                `Your GPA/CGPA is: ${cgpa} / 4.00`;
        }