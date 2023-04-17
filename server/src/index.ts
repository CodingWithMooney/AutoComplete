import express, { Request, Response } from "express"
import cors from "cors"


const app = express();
app.use(cors());
app.use(express.json());


//We only want to filter by first and last
interface UData {
    firstName: string;
    lastName: string;
  }


//Get all users
app.post("/users/search", async (req:Request,res:Response) => {
     const users = await fetch('https://dummyjson.com/users')
     .then(res => res.json());
     if (req.body.search.length > 0) {
        const regex = new RegExp(`^${req.body.search}`, "i");
        const filtered_firstName = users.users.sort().filter((v: UData) => regex.test(v.firstName));
        const filtered_lastName = users.users.sort().filter((v: UData) => regex.test(v.lastName));
        res.send(filtered_firstName.concat(filtered_lastName));
    }    
});

//Get single user by id
app.get("/users/:id", async (req:Request,res:Response) => {
    const id = req.params.id;
    const user = await fetch(`https://dummyjson.com/users/${id}`)
    .then(res=>res.json());

    res.send(user)
   });



app.listen(4000, () => console.log("Backend started: 4000"));