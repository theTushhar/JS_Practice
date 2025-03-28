const user = {
    username: "Tushar",
    age: 24,
    newfun: function(){
        console.log(`${this.username}, Welcome to the course`);
        console.log(this);
    }
}

user.newfun();
console.log(this);

function newfun2(){
    name: "TusharGupta";
    console.log(this.name);
}

newfun2();