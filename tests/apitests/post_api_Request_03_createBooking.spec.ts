/*
Test:Create booking
Request Type: POST
Request body: random/dynamic data generated using faker library


pre-requisite: run the createBooking test with random data to generate the booking id and use that booking id in the update and delete tests
install faker library to generate random data for the request body
npm install @faker-js/faker

install luxon library to generate random date for the booking dates in the request body
npm install luxon
*/

import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { DateTime } from 'luxon';



test("create Post request using faker library for random data", async ({ request }) => {
   
//generate random data for the request body using faker library
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const totalprice = faker.number.int({ min: 100, max: 5000 });
const depositpaid = faker.datatype.boolean();
const checkinDate = DateTime.now().toFormat('yyyy-MM-dd');
const checkoutDate = DateTime.now().plus({ days: 5 }).toFormat('yyyy-MM-dd');
const additionalneeds ="superbowl";

//request body with random data generated using faker library
  const requestBody = 
   {
    "firstname" : firstName,
    "lastname" : lastName,
    "totalprice" : totalprice,
    "depositpaid" : depositpaid,
    "bookingdates" : {
        "checkin" : checkinDate,
        "checkout" : checkoutDate
    },
    "additionalneeds" : additionalneeds
}

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