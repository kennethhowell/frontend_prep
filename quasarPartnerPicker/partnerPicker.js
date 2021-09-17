var students = ["Darrell Armstrong", "Steven Lacy", "Clinton Smith", "Dezmone Musgrove", "James Livingston", "Jackie Dallas", "Robert Allison", "Nick Adams", "Destiney Rodney", "Jeff Maclarty", "Mary White", "Kapena Magallan", "Adamina Flores", "Rhiannon Hayes",  "Justin Fraser", "Ian Mcconihay", "Rodriques Perry"]

var studentsAsObjects = [
        {
        name: "Alex Riley",
        modality: "in-person"
    }, {
        name: "Bosch Leith",
        modality: "in-person"
    }, {
        name: "Matthias Hinojosa",
        modality: "in-person"
    }, {
        name: "Patric Noriega",
        modality: "in-person"
    }, {
        name: "Joanna Foss",
        modality: "in-person"
    }, {
        name: "Jose Maldonado",
        modality: "in-person"
    }, {
        name: "Kevin Orta",
        modality: "in-person"
    }, {
        name: "John Alejandro",
        modality: "in-person"
    }, {
        name: "Bernie Esquivel",
        modality: "in-person"
    }, {
        name: "Darrell Armstrong",
        modality: "online"
    }, {
        name: "Steven Lacy",
        modality: "online"
    }, {
        name: "Clinton Smith",
        modality: "online"
    }, {
        name: "Dezmone Musgrove",
        modality: "online"
    }, {
        name: "James Livingston",
        modality: "online"
    }, {
        name: "Jackie Dallas",
        modality: "online"
    }, {
        name: "Robert Allison",
        modality: "online"
    }, {
        name: "Nick Adams",
        modality: "online"
    }, {
        name: "Destiney Rodney",
        modality: "online"
    }, {
        name: "Jeff Maclarty",
        modality: "online"
    }, {
        name: "Mary White",
        modality: "online"
    }, {
        name: "Kapena Magallan",
        modality: "online"
    }, {
        name: "Adamina Flores",
        modality: "online"
    }, {
        name: "Rhiannon Hayes",
        modality: "online"
    }, {
        name: "Justin Fraser",
        modality: "online"
    }, {
        name: "Ian Mcconihay",
        modality: "online"
    }, {
        name: "Rodriques Perry",
        modality: "online"
    }

]


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

//recator MEOW
//refactor: studentObjectPicker
// function studentObjPicker(arr){
//
//
//     let onlineStudentsArr = arr.filter(function(student){
//         return student.modality === "online";
//     })
//
//     let inPersonStudentArr = arr.filter(function(student){
//         return student.modality === "in-person";
//     })
//
//
//     let returnArr = [];
//     let currBucket = [];
//     let unevenClass = arr.length % 2 === 1;
//
//     let killTask = 0;
//     for(let i = 0; i < (onlineStudentsArr.length + inPersonStudentArr.length);){
//
//
//
//         killTask++;
//                     if(killTask === 30){
//                         break;
//                     }
//
//
//         if(inPersonStudentArr.length > 0) {
//             let onlineIndex = Math.floor(Math.random() * onlineStudentsArr.length);
//             let inPersonIndex = Math.floor(Math.random() * inPersonStudentArr.length);
//
//             currBucket[0] = onlineStudentsArr.splice(onlineIndex, 1);
//             currBucket[1] = inPersonStudentArr.splice(inPersonIndex, 1);
//             returnArr.push(currBucket);
//             currBucket = [];
//
//         }
//
//         let studentIndex = Math.floor(Math.random() * onlineStudentsArr.length);
//
//         console.log("studentIndex is currently " + studentIndex);
//
//         console.log(onlineStudentsArr);
//         console.log(onlineStudentsArr.splice(studentIndex, 1));
//         currBucket[0] = onlineStudentsArr.splice(studentIndex, 1);
//         console.log(currBucket[0].modality);
//
//         //
//         //if: class was uneven, add another one to the first group
//         if(currBucket.length === 2 && unevenClass) {
//
//             let anotherStudent = Math.floor(Math.random() * onlineStudentsArr.length)
//             currBucket.push(onlineStudentsArr.splice(anotherStudent, 1));
//
//             returnArr.push(currBucket);
//             currBucket = [];
//
//             unevenClass = false;
//
//         } else if (currBucket.length === 2) { //else if currBucket is a pair, add to returnArr and empty bucket
//
//             returnArr.push(currBucket);
//             currBucket = [];
//         }
//     //
//     //
//     }
//
//
//     return returnArr;
//
//
// }
//
//
// console.log(studentObjPicker(studentsAsObjects));