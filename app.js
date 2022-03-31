const mongoose = require("mongoose");

const mongoUrl = "mongodb://localhost:27017/school";

mongoose.connect(mongoUrl, (err, succ) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected Successfully!");
        // console.log(succ);
    }
})



const teacherSchema = mongoose.Schema(
    {
        name : {
            type: String,   //mandatory field that has to be added when we're defining the schema in this way
            required: true
        },
        age : {
            type: Number,
            required: true
        },
        email : String,
    }
)


const TeacherModel = mongoose.model("teachers", teacherSchema);

var teacher1 = new TeacherModel(
    {
        name : "Wanda",
        age: 23,
        email: "wanda@gmail.com"
    }
)

var teacher2 = new TeacherModel(
    {
        name : "Vision",
        age: 100,
        email: "vision@gmail.com"
    }
)

var teacher3 = new TeacherModel(
    {
        name : "Ralph",
        age: 23,
        email: "ralph@gmail.com"
    }
)

var teacher4 = new TeacherModel(
    {
        name : "Bohner",
        age: 25,
        email: "bohner@gmail.com"
    }
)

var tempArr = [teacher3, teacher4];

TeacherModel.insertMany(tempArr, (err, succ) => {
    if (err) {
        console.log(err);
    } else {
        console.log(succ);
        console.log("Inserted Multiple Docs");
    }
})

TeacherModel.find({age: {$gt: 23}}, (err, succ) => {
    if (err) {
        console.log(err);
    } else {
        console.log(succ);
        console.log("Found some");
    }
})

TeacherModel.updateOne({name: "Vision"}, {age: 50}, (err, succ) => {
    if (err) {
        console.log(err);
    } else {
        console.log(succ);
        console.log("Updated One!");
    }
})

TeacherModel.deleteOne({name: "Bohner"}, (err, succ) => {
    if (err) {
        console.log(err);
    } else {
        console.log(succ);
        console.log("Deleted One!");
    }
})


// clear the garbage data from the collection before deploying the project or going into production mode.
// Garbage data is the data we use to test our application which not necessarily have any meaning and is not real data,
// for instance the data to check whether UI looks with a bunch of random text and to check whether a random object is inserted to our 
// collection.





