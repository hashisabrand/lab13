const request = require("supertest");
const app = require('./routes/User');
const mongoos e = require('mongoose');

describe("Test the root path", () => {
    test("It should response the POST method", () => {
        const response = request(app).post("http://localhost:8000/users/add"
        ).send ({
            "Name": "hash",
            "Email": "hhh",
            "Age": 21,
            "Contact": 123
        })
    })
        expect(response.statusCode).toBe(200);
    
})

describe("Test the delete path",()=>{
    test("It should reponse the POST method",()=>{
        const response=request(app).delete("http://localhost:8000/User/:id"
).send({
    "Id" : "6366a8e6c22a3633833ba5a7"
})
expect(response.statusCode).toBe(200);
})
})


describe("Test the add route 2", () => {
    test("It should response the POST method", () => {
        const response = request(app).post("http://localhost:8000/users/add"
        ).send ({
            "Name": "hash",
    
        })
    })
        expect(response.statusCode).toBe(200);
    
})
