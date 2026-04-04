/*
Test:Create booking
Request Type: POST
Request body: static

*/

import { test, expect } from '@playwright/test';

test("create Post request for booking", async ({ request }) => {
   
   //request body for creating booking
    const requestBody = 
   {
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}


//send POST request to create booking

const response = await request.post("https://restful-booker.herokuapp.com/booking", {
    data: requestBody});


})  