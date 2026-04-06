/*
1.create new booking
2.get booking
3.update booking(token)
4.delete booking(token)

*/

import{test,expect} from '@playwright/test';
import * as fs from "fs";

//utility function to read data from json file
function readJson(filename:string){
    return JSON.parse(fs.readFileSync(filename,"utf-8"));
}


test("delete booking using delete request", async({request})=>{

//1. create new booking

const requestBody=readJson("testdata/post_request_body.json");
const postresponse = await request.post("/booking", 
    {data: requestBody});
const postresponseBody = await postresponse.json(); //exraxted response body
console.log(postresponseBody);
const bookingId=postresponseBody.bookingid; //booking id to be used as path parameter in the DELETE request
console.log("Booking is created.......");
console.log("Booking id:", bookingId);


//2.get booking
const getresponse =await request.get(`/booking/${bookingId}`);
const getresponseBody = await getresponse.json(); //exraxted response body
console.log("Booking details are fetched.......");
console.log(getresponseBody);

//3.update booking(token)
//token creation
const tokenrequestBody=readJson("testdata/token_request_body.json");
const tokenresponse = await request.post("/auth", { data: tokenrequestBody });
const tokenresponseBody=await tokenresponse.json();
const token=tokenresponseBody.token; //token to be used in the authorization header of the PUT request
console.log("Token created:", token);

//sending put request to update the booking details
const updateRequestBody=readJson("testdata/put_request_body.json");
const updateResponse = await request.put(`/booking/${bookingId}`, 
    { 
        headers:{"Cookie":`token=${token}`},
        data: updateRequestBody
    });
const updateResponseBody=await updateResponse.json();
console.log("Booking details updated successfully.....");
console.log(updateResponseBody);

//4.delete booking(token)
const deleteResponse = await request.delete(`/booking/${bookingId}`, 
    { 
        headers:{"Cookie":`token=${token}`}
    });
expect(deleteResponse.statusText()).toBe("Created");
expect(deleteResponse.status()).toBe(201);
console.log("Booking deleted successfully.....");

});    