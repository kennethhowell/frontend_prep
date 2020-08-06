// var random = Math.floor(Math.random() * 50) + 1;

for (let i = 0; i <= 50; i++){
    var random = Math.floor(Math.random() * 50) + 1;
    if (i % 2 === 0){
        continue;
    } else if (i === random){
        console.log("NOOOOOOOOOOOOOOOOOOOO" + random)
    } else {
        console.log("okay" + i)
    }
}