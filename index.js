document.addEventListener("DOMContentLoaded", () => {
    fetch("./data.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const historyList = document.getElementById("historyList");
        data.history.forEach((fact) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <div class="fact-container" style="display: flex; align-items: flex-start; align-items: center; gap: 20px;">
                    <div class="fact-content">
                        <h1><strong>${fact.title}</strong></h1>
                        <p>${fact.body}</p>
                    </div>
                    ${
                        fact.image
                        ? `<img src="${fact.image}" alt="${fact.title}" class="list-image" style="width: 200px; style="height: auto;">`
                        : ""
                    }
                </div>
            `;
        historyList.appendChild(listItem);
        });
    });
});