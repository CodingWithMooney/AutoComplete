import { UData } from "../Interfaces/interfaces"
import removeDuplicate from "../helperFunctions/removeDuplicates";
//vars
export const multipleUsers =  [{"id":1,"firstName":"Terry","lastName":"Medhurst"},{"id":3,"firstName":"Terrill","lastName":"Hills"},{"id":16,"firstName":"Trycia","lastName":"Fadel"},{"id":22,"firstName":"Tressa","lastName":"Weber"},{"id":28,"firstName":"Kody","lastName":"Terry"}];


//Get users based on user data and character string
export const getMultipleUsers = (request:any[],search:string):UData | any => {

if (search.length > 0) {
    const regex = new RegExp(`^${search}`, "i");
    const filtered_firstName = request.sort().filter((v: UData) => regex.test(v.firstName));
    const filtered_lastName = request.sort().filter((v: UData) => regex.test(v.lastName));
    const filtered_userName = request.sort().filter((v: UData) => regex.test(v.username));
    const filtered_userEmail = request.sort().filter((v: UData) => regex.test(v.email));
    let result = [filtered_firstName,filtered_lastName,filtered_userEmail,filtered_userName];
    const results = result.flat();
    const final_result = removeDuplicate(results).sort();
    return (final_result)
}
}
// export users array
export const getData = () => {
    return multipleUsers
}