const form = document.querySelector("form");
const modal = document.getElementById("result-modal");
const closeBtn = document.querySelector(".close-btn");
const resultContainer = document.getElementById("result-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height) || height <= 0) {
    alert("Mohon masukkan data yang valid!");
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  const bmiFormatted = bmi.toFixed(1);

  let category = "";
  let categoryColor = "";

  if (bmi < 18.5) {
    category = "Underweight";
    categoryColor = "bg-blue-200 text-blue-800";
  } else if (bmi < 25) {
    category = "Normal weight";
    categoryColor = "bg-green-200 text-green-800";
  } else if (bmi < 30) {
    category = "Overweight";
    categoryColor = "bg-yellow-200 text-yellow-800";
  } else {
    category = "Obesity";
    categoryColor = "bg-red-200 text-red-800";
  }

  resultContainer.innerHTML = `
    <p>Berat Badan: <strong>${weight} KG</strong></p>
    <p>Tinggi Badan: <strong>${height} CM</strong></p>
    <p>BMI = <strong>${bmiFormatted}</strong></p>
    <p class="px-4 py-2 rounded-full inline-block ${categoryColor}">
      Category: ${category}
    </p>
  `;

  modal.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
