import {getSingleUser} from "../src/test/user";
import {getData,getMultipleUsers} from "../src/test/users";


//Provided user id, return user id
describe("Get single user", () => {
  test("Return one user with id of 1", () => {
    const res = getSingleUser(1);
    expect(res).toBe(true);
  });
});

//Provider array of data for users and character string, return matching names to the character
describe("Search by character", () => {
    test("Expect one user", () => {
    let string = "t";
    const data = getData();
    const res = getMultipleUsers(data,string);
    expect(res).toEqual([{"id":1,"firstName":"Terry","lastName":"Medhurst"},{"id":3,"firstName":"Terrill","lastName":"Hills"},{"id":16,"firstName":"Trycia","lastName":"Fadel"},{"id":22,"firstName":"Tressa","lastName":"Weber"},{"id":28,"firstName":"Kody","lastName":"Terry"}])
    });
});




