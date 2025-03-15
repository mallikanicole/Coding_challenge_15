//Task 2
function addRiskItem(riskName, riskLevel, department) {
    const card = document.createElement("div");
    ticket.classList.add("risk-card");

    const nameHeading = document.createElement("h3");
    nameHeading.textContent = riskName;

    const issueParagraph = document.createElement("p");
    issueParagraph.textContent = department;

    const riskLabel = document.createElement("span");
    riskLabel.textContent = `Priority: ${riskLevel}`;

    if (riskLevel.toLowerCase() === "high") {
        ticket.classList.add("high-priority");
    document.getElementById('addTicketBtn').addEventListener('click', () => {
        const currentTicket = addRiskItem("Data Breach", "High", "IT");
        styleSingleCard(currentTicket);
    })
    }
//Task 3
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.classList.add("resolve-button");
    resolveButton.addEventListener("click", function () {
        ticketContainer.removeChild(ticket);
    });

    ticket.appendChild(nameHeading);
    ticket.appendChild(issueParagraph);
    ticket.appendChild(riskLabel);
    ticket.appendChild(resolveButton);

    ticketContainer.appendChild(ticket);
}

addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

//Task3

addRiskItem("Market Fluctuations", "High", "Finance");
// Clicking "Resolve" should remove this risk from the dashboard.