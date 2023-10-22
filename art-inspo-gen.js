/* Art Inspiration Generator

Aim: to randomly generate an art prompt of one thing (single or plural),
one verb/ action and up to three despriptors.

*/

// THINGS
const thingsSingular = ["wizard", "toad", "tree", "potion", "castle", "book", "knight", "rose"];
const thingsPlural = ["company", "herd", "flock", "bandits", "pirates", "troop", "team", "school"];

// ACTION
const actionOpt = ["fighting", "reading", "dancing", "brewing", "crafting", "flying", "running", "eating", "sleeping"];

// DESCRIPTIONS
const descriptions = ["purple", "red", "blue", "yellow", "quiet", "mysterious", "happy", "grumpy", "bold", "inquisitive", "cloudy", "sunny"];


// message object
const message = (thingType, numberOfDescriptions) => {
    return{
        _thing : "",
        _action: "",
        _descriptors: [],
        generateThing(thingType){
                if(thingType === "s"){
                    this._thing = thingsSingular[Math.floor(Math.random()*(thingsSingular.length+1))];
                }else if(thingType === "p"){
                    this._thing = thingsPlural[Math.floor(Math.random()*(thingsPlural.length+1))];
                }else{
                    console.log("invalid options selected for thing");
                }
            },
        generateAction(){
            this._action = actionOpt[Math.floor(Math.random()*(actionOpt.length+1))];
        },
        generateDescriptions(numberOfDescriptions){
            if(numberOfDescriptions <= 3){
                for(let i = 0; i <= numberOfDescriptions; i++){
                    let tempDesc = descriptions[Math.floor(Math.random()*(descriptions.length+1))];
                    this._descriptors.push(tempDesc);
                    }
                }
            }
        }

    };


// generate a new message
const generateMessage = (thingType, numberOfDescriptions) => {
    let newMessage = message();
    newMessage.generateThing(thingType);
    newMessage.generateAction();
    newMessage.generateDescriptions(numberOfDescriptions);
    return newMessage;
}

let messageTest = generateMessage("p", 2);

console.log(generateMessage("s", 3));

console.log(messageTest._descriptors);