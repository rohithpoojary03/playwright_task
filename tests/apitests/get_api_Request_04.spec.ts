import{test,expect} from '@playwright/test';

test("get booking details using id as path parameter", async({request})=>{

const bookingId=2002; //booking id to be used as path parameter in the GET request

//sending get request to fetch the booking details for the given booking id
const response=await request.get(`/booking/${bookingId}`);

////parse the response body and validate the booking details in the response body
const responseBody=response.json();
console.log(responseBody);

//add assetion
expect(response.ok()).toBeTruthy();
expect(response.status()).toBe(200);

});

test.only("get booking details using name-query parameter", async({request})=>{

    const firstName="Jim"; //first name to be used as query parameter in the GET request
    const lastName="Brown"; //last name to be used as query parameter in the GET request
    
//sending get request to fetch the booking details for the given booking id
const response=await request.get("/booking", { params: { firstName, lastName } });

////parse the response body and validate the booking details in the response body
const responseBody= await response.json();
console.log(responseBody);

//add assetion
expect(response.ok()).toBeTruthy();
expect(response.status()).toBe(200);

//check response should not be empty
expect(responseBody.length).toBeGreaterThan(0);
for(const item of responseBody){
    expect(typeof item.bookingid).toBe("number");
    expect(item.bookingid).toBeGreaterThan(0);
}

});