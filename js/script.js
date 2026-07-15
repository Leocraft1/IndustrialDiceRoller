//Gets all elements from HTML
const languageP = document.getElementById('language-p');

const typeSelect = document.getElementById('type-select');
const quantityInput = document.getElementById('quantity-input');
const cdInput = document.getElementById('cd-input');
const resultsContainer = document.getElementById('results-container');

//Language switcher
function switchLanguage(to){
    switch (to){
        case "en":
            window.location.href = "./en.html"
            break;
        case "it":
            window.location.href = "../"
            break;
    }
}

//Rolls whatever
function roll(){
    const type = typeSelect.value;
    const quantity = quantityInput.value;
    const cd = cdInput.value;
    console.log("Throwing: d"+type+" times: "+quantity+" cd: "+cd);

    var rolls = [];
    var success_count = 0;
    for(var i=0;i<quantity;i++){
        rolls[i] = Math.round((Math.random()*type)+1);
        if(rolls[i]>=cd||rolls[i]==20){
            success_count++;
        }
    }
    var success_perc = (success_count/quantity)*100;
    console.log("Rolls: "+rolls);
    console.log("Successes: "+success_count+" ["+success_perc+"%]");

    renderResults(rolls, success_count, success_perc)
}

function renderResults(rolls, success_count, success_perc){
    resultsContainer.innerHTML = `<hr>
        Statistics: <br>
        Successes: ${success_count} - Success percentage: ${success_perc}% <br>
        Failures: ${rolls.length-success_count} - Failure percentage: ${100-success_perc}% <hr>
    `;
    resultsContainer.innerHTML += "Rolls:";
    const rollsP = document.createElement('p');
    rollsP.className = "rolls";
    for(var i=0;i<rolls.length;i++){
        if(rolls[i]==20){
            rollsP.innerHTML += '<span class="green">' + rolls[i] + "</span>, ";
        }else
        if(rolls[i]==1){
            rollsP.innerHTML += '<span class="red">' + rolls[i] + "</span>, ";
        }else{
            rollsP.innerHTML += rolls[i] + ", ";
        }
    }
    resultsContainer.appendChild(rollsP);
}