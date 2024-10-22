document.addEventListener("DOMContentLoaded", () => {
  fetch("./records.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const recordsList = document.getElementById("recordsList");
      data.records.forEach((record) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <p>
                <strong>${record.title} - ${record.holder} (${
          record.value
        })</strong> 
                ${record.description}
            </p>
            ${
              record.image
                ? `<img src="${record.image}" alt="${record.holder}" class="list-image">`
                : ""
            }
        `;
        recordsList.appendChild(listItem);
      });
    })
});
