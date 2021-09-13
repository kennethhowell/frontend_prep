var students = ["Alex Riley", "Bosch Leith", "Matthias Hinojosa", "Patric Noriega", "Joanna Foss", "Jose Maldonado", "Kevin Orta", "John Alejandro", "Bernie Esquivel", "Darrell Armstrong", "Steven Lacy"," Clinton Smith", "Dezmone Musgrove", "James Livingston", "Jackie Dallas", "Robert Allison", "Nick Adams", "Destiney Rodney", "Jeff Maclarty", "Mary White", "Kapena Magallan", "Adamina Flores", "Rhiannon Hayes",  "Justin Fraser", "Ian Mcconihay", "Rodriques Perry", "Uneven Kenny"]


s


//Testing array
var theKens = ["ken", "kenny", "kenneth", "kensington", "kennedy", "kenley", "kenna", "kentashi"]

function studentPicker(arr){

    let returnArr = [];
    let currBucket = [];
    let unevenClass = arr.length % 2 === 1;

    for(let i = 0; i < arr.length;){

       let student = Math.floor(Math.random() * arr.length);

        currBucket.push(arr.splice(student, 1));


        //if: class was uneven, add another one to the first group
        if(currBucket.length === 2 && unevenClass) {

            let anotherStudent = Math.floor(Math.random() * arr.length)
            currBucket.push(arr.splice(anotherStudent, 1));

            returnArr.push(currBucket);
            currBucket = [];

            unevenClass = false;

        } else if (currBucket.length === 2) { //else if currBucket is a pair, add to returnArr and empty bucket

            returnArr.push(currBucket);
            currBucket = [];
        }


    }

return returnArr;


}

console.log(studentPicker(students));

