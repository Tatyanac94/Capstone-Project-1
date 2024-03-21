//I declared an array named skills to hold my current skills. I created a for loop inside a function to iterate through the array and display each skill in an unordered list. The SkillsEvent function is called when the button is clicked.

let skills = ["HTML",
              "Javascript",
              "CSS",
              "Bootstrap",
              "Troubleshooting",
              "Networking",
              "Security",
              "Hardware"]

let skillContainer = document.getElementById("myULS");
let skillsButton = document.getElementById("SB");
skillsButton.addEventListener("click", SkillsEvent);
function SkillsEvent(){
  for (let i = 0; i < skills.length; i++){
    let skill = document.createElement("li");
    skill.classList.add("list-group-item");
    skill.textContent = skills[i];
   skillContainer.appendChild(skill);
  }
}