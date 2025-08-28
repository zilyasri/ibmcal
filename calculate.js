const form = document.querySelector("form");
const modal = document.getElementById("result-modal");
const closeBtn = document.querySelector(".close-btn");
const resultContainer = document.getElementById("result-container");

function calculateBMI(weight, height) {
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
}

function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return { text: "Underweight", color: "bg-blue-200 text-blue-800" };
  } else if (bmi < 25) {
    return { text: "Normal weight", color: "bg-green-200 text-green-800" };
  } else if (bmi < 30) {
    return { text: "Overweight", color: "bg-yellow-200 text-yellow-800" };
  } else {
    return { text: "Obesity", color: "bg-red-200 text-red-800" };
  }
}

function showResult(weight, height, bmi, category) {
  resultContainer.innerHTML = `
    <p>Berat Badan: <strong>${weight} KG</strong></p>
    <p>Tinggi Badan: <strong>${height} CM</strong></p>
    <p>BMI = <strong>${bmi.toFixed(1)}</strong></p>
    <p class="px-4 py-2 rounded-full inline-block ${category.color}">
      Category: ${category.text}
    </p>
  `;

  modal.classList.remove("hidden");
  setTimeout(() => modal.classList.add("show"), 10);
}

function closeModal() {
  modal.classList.remove("show");
  setTimeout(() => modal.classList.add("hidden"), 300); // nunggu animasi
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Mohon masukkan data yang valid!");
    return;
  }

  const bmi = calculateBMI(weight, height);
  const category = getBMICategory(bmi);

  showResult(weight, height, bmi, category);
});

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
