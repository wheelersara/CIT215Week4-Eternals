//Instructions
//The assignment this week follows the plan of the pets projects, and the updates
//  to the DOM with DOM methods - this means that you will be using createElement/append to successfully complete this assignment. 
// No strings containing <li>,as we did before. You must use this course content in order to be awarded credit for this assignment.
//Task: You are going to list a number of super hero characters and their attributes, from the Eternals.
// Use an array to list 5 characters from the Eternals, as objects
// Choose between 3 to 5 attributes, skills, to use in each object array element (you choose these)
// (Here, consider adding an array of skills, like ["sword", "languages",....] to each object)
// List the characters using the same strategy as the pets model
// List a set of powers, from the characters' skill arrays
// Allow the user to enter an attribute, and find (in your solution make sure to use method find) the character(s) with 
// this attribute. Note, "sword" could be an attribute that is possessed by more than one Eternals object. 
// Display information about the character, or characters, including an image. Make sure that you have modified your data to include 
// multiple characters sharing an attribute, like sword.

const eternals = [
    {
        name: "Kingo",
        skills:["strength", "flight", "immortality"],
        description: "Kingo has superhuman strength, the ability to fly, and is immortal.",
        photo: "Images/kingo.jpg"
    },
    {
        name: "Sersi",
        skills:["telepathy", "telekenesis", "flight"],
        description: "Sersi has the abilities of Telepathy and Telekenesis, and can fly.",
        photo: "Images/sersi.jpg"
    },
    {
        name: "Ikarus",
        skills:["strength", "flight", "regeneration"],
        description: "Ikarus possesses superhuman strength, the ability to fly, and can regenerate.",
        photo: "Images/ikerus.jpg"

    },
    {
        name: "Ajak",
        skills:["wrestling", "durability", "energy projection"],
        description: "Ajak is skilled in wrestling, has high durability, and can project energy.",
        photo: "Images/ajak.jpg"
    },
    {
        name: "Thena",
        skills:["combat", "stamina", "speed"],
        description: "Thena is skilled in combat, has high stamina, and speed.",
        photo: "Images/thena.jpg"
    }
]

//Create Heading
const heading = document.createElement("h1");
heading.innerText = "The Eternals";
document.body.append(heading);

//List Eternals Names
eternals.forEach(eternal => {
    const ul = document.createElement("ul");
    ul.innerText = eternal.name;
    document.body.append(ul);
});

//Ask for Input
const skillInputText = document.createElement("p");
skillInputText.innerText = "Enter a skill that you would like to find that Eternals above posess:";
document.body.append(skillInputText);

//Get Skill Input
const skillInput = document.createElement("input");
document.body.append(skillInput);

//Create Find Skill Button
const findSkillsButton = document.createElement("button");
findSkillsButton.innerText = "Find Skills";
document.body.append(findSkillsButton);

//Create Result Div
const result = document.createElement("div");
document.body.append(result);

//List Matching Eternals
function getMatchingEternals(){
    let skill = skillInput.value;
    result.innerHTML = "";

    if (!skill) return alert("Enter a Skill");

    const eternalMatch = eternals.filter(eternal => eternal.skills.includes(skill)); 

    if (eternalMatch.length > 0) {
        // found message
        const returnSkill = document.createElement("h2");
        returnSkill.innerText = "Skill Found: " +skill;
        result.append(returnSkill);

        eternalMatch.forEach(eternal => {
            //match
            const match = document.createElement("h3");
            match.innerText = "Eternal Found:";
            result.append(match);

            // name
            const name = document.createElement("h3");
            name.innerText = eternal.name;
            result.append(name);

            // skills
            const description = document.createElement("p");
            description.innerText = eternal.description;
            result.append(description);

            // image
            const picture = document.createElement("img");
            picture.src = eternal.photo;
            result.append(picture);
        });
    } else {
        const notFound = document.createElement("h3");
        notFound.innerText = "No Eternals Found";
        result.append(notFound);
    }
}


findSkillsButton.onclick = getMatchingEternals;

   



