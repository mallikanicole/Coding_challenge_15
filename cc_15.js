//Task 2
function addRiskItem(riskName, riskLevel, department) {
    const card = document.createElement("div");
    card.classList.add("risk-item");
    const riskitem = document.createElement('div');
    riskitem.setAttribute('class','risk-item');

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
        card.removeChild(ticket);
    });

    card.appendChild(nameHeading);
    card.appendChild(issueParagraph);
    card.appendChild(riskLabel);
    card.appendChild(resolveButton);

    
    //Task 6
    
    cardSection.addEventListener("click"), function() {
         document.querySelectorAll(".risk-card").forEach(card => {
        card.addEventListener("click", function(event) {
        console.log("Risk card clicked");
         event.stopPropagation(); 
    })});    
    }
}

//Task 4

function highlightHighPriorityTickets(){
    //Selecting all the support tickets currently on the page
    const highPriorityTickets = document.querySelectorAll('.ticket-card');

    //Task 5
    const increaseRiskButon= document.createElement("button");
    increaseRiskButon.textContent="Increase Risk";
    increaseRiskButon.classList.add("increase-risk");
    increaseRiskButon.addEventListener("click",function(){
        ticketContainer.highlightHighPriorityTickets(riskitem);
    })
}
addRiskItem("Employee Retention", "Low", "HR");

addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");
highlightHighPriorityTickets()

//Task 2
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

//Task3

addRiskItem("Market Fluctuations", "High", "Finance");
// Clicking "Resolve" should remove this risk from the dashboard.