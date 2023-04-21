import { UData } from "../Interfaces/interfaces"

//vars
export const multipleUsers =  [{"id":1,"firstName":"Terry","lastName":"Medhurst"},{"id":2,"firstName":"Mark","lastName":"Denim"}]

//Get users based on user data and character string
export const getMultipleUsers = (request:Array<{id: number, firstName: string, lastName: string}>,search:string):UData | any => {
    if (search.length > 0) {
       const regex = new RegExp(`^${search}`, "i");
       const filtered_firstName = request.sort().filter((v: UData) => regex.test(v.firstName));
       const filtered_lastName = request.sort().filter((v: UData) => regex.test(v.lastName));
       return (filtered_firstName.concat(filtered_lastName));
}
}

// export users array
export const getData = () => {
    return multipleUsers
}