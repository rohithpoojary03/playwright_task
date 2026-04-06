/*
data from json file
create token

1.create booking(post)--->bookingid
2.update booking(put) 
*/

import{test,expect} from '@playwright/test';
import * as fs from "fs";

//utility function to read data from json file
function readJson(filename:string){
    return JSON.parse(fs.readFileSync(filename,"utf-8"));
}    

test("update booking details using put request", async({request})=>{

//1.create a booking(post) and get the booking id from the response
const requestBody=readJson("testdata/post_request_body.json");
const createresponse = await request.post("/booking", { data: requestBody });
expect(createresponse.ok()).toBeTruthy();

const responseBody=await createresponse.json();
console.log(responseBody);

const bookingId=responseBody.bookingid; //booking id to be used as path parameter in the PUT request
console.log("Booking created with id:", bookingId);

//2.update the booking details using put request
//token creation
const tokenrequestBody=readJson("testdata/token_request_body.json");
const tokenresponse = await request.post("/auth", { data: tokenrequestBody });
expect(tokenresponse.ok()).toBeTruthy();

const tokenresponseBody=await tokenresponse.json();
const token=tokenresponseBody.token; //token to be used in the authorization header of the PUT request

console.log("Token created:", token);


//sendind update request
const updateRequestBody=readJson("testdata/put_request_body.json");
const updateResponse = await request.put(`/booking/${bookingId}`, 
    { 
        headers:{"Cookie":`token=${token}`},
        data: updateRequestBody
    });
expect(updateResponse.ok()).toBeTruthy();
expect(updateResponse.status()).toBe(200);

const updateResponseBody=await updateResponse.json();
console.log(updateResponseBody);
console.log("Booking details updated successfully.....");

});
