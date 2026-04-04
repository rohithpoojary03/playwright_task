/*
Test:Create booking
Request Type: POST
Request body: Json

*/

import { test, expect } from '@playwright/test';
import fs from 'fs';   


test("create Post request using Json body", async ({ request }) => {
   
   //read data from json file
    const jsonFile="testdata/post-request-body.json";
    const requestBody= JSON.parse(fs.readFileSync(jsonFile,'utf-8'));


//send POST request to create booking

const response = await request.post("/booking", {
    data: requestBody});
const responseBody = await response.json(); //exraxted response body
console.log(responseBody);

//validate the response status code and response body
expect(response.ok()).toBeTruthy();
expect(response.status()).toBe(200);

//validate the response body
expect(responseBody).toHaveProperty("bookingid");
expect(responseBody).toHaveProperty("booking");
expect(responseBody.booking).toHaveProperty("additionalneeds");

//validate the booking details in the response body
const booking=responseBody.booking;
expect(booking).toMatchObject({
    "firstname" : requestBody.firstname,
    "lastname" : requestBody.lastname,
    "totalprice" : requestBody.totalprice,
    "depositpaid" : requestBody.depositpaid,
    "additionalneeds" : requestBody.additionalneeds
});
 
//validate the booking dates in the response body
expect(booking.bookingdates).toMatchObject({
    "checkin" : requestBody.bookingdates.checkin,
    "checkout" : requestBody.bookingdates.checkout
});


})  