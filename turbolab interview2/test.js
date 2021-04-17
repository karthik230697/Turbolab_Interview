var input = [
    {
        name: "company",
        type: "IS",
        value: ["Apple", "Google"],
    },
    {
        name: "technology",
        type: "IS",
        value: ["Javascript", "React"],
    },
    {
        name: "technology",
        type: "NOT",
        value: ["Vue", "Angular"],
    },
    {
        name: "company",
        type: "NOT",
        value: ["Microsoft", "Wipro"],
    },
    {
        name: "location",
        type: "NOT",
        value: ["Bangalore", "Chennai"],
    },
];

console.log(input);

var result = {};

for (var i = 0; i < input.length; i++) {
    if(!result[input[i].name]){
        result[input[i].name] = {};
    }
    if(input[i].type == "IS") {
        result[input[i].name].IS = input[i].value;
    } else {
        result[input[i].name].NOT = input[i].value;
    }
}
console.log(result);