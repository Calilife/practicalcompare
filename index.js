'use strict';

//const { isDataView } = require("util/types");

// const jsonData = {
//     "order": {
//         "id": "450789469",
//         "email": "bob.norman@hostmail.com",
//         "created_at": "2020-06-15T11:00:00-05:00",
//         "currency": "USD",
//         "updated_at": "2020-07-15T11:00:00-05:00",
//         "gateway": "authorize_net",
//         "browser_ip": "111.111.111.111",
//         "total_price": 319,
//         "total_discounts": 10,
//         "cart_token": "68778783ad298f1c80c3bafcddeea02f",
//         "device_id": "01234567-89ABCDEF-01234567-89ABCDEF",
//         "referring_site": "google.com",
//         "line_items": [
//             {
//                 "price": 329,
//                 "quantity": 1,
//                 "title": "Apple Watch Series 3 GPS, 38mm Silver Aluminum Case with Fog Sport Band",
//                 "product_id": "632910392",
//                 "category": "electronics",
//                 "brand": "apple",
//                 "product_type": "physical"
//             }
//         ],
//         "discount_codes": [
//             {
//                 "amount": 10,
//                 "code": "TENOFF"
//             }
//         ],
//         "shipping_lines": [
//             {
//                 "price": 0,
//                 "title": "Free Shipping"
//             }
//         ],
//         "payment_details": [
//             {
//                 "credit_card_bin": "414049",
//                 "avs_result_code": "A",
//                 "cvv_result_code": "M",
//                 "credit_card_number": "XXXX-XXXX-XXXX-4242",
//                 "credit_card_company": "Visa",
//                 "stored_payment_created_at": "2019-08-21T12:50:00+00:00",
//                 "stored_payment_updated_at": "2020-01-13T12:51:00+00:00"
//             }
//         ],
//         "customer": {
//             "email": "bob.norman@hostmail.com",
//             "verified_email": true,
//             "first_name": "Bob",
//             "last_name": "Norman",
//             "id": "207119551",
//             "created_at": "2019-08-21T13:36:50-04:00",
//             "account_type": "registered"
//         },
//         "billing_address": {
//             "first_name": "Bob",
//             "last_name": "Norman",
//             "address1": "Chestnut Street 92",
//             "country": "United States",
//             "country_code": "US",
//             "phone": "555-625-1199",
//             "city": "Louisville",
//             "province": "Kentucky",
//             "province_code": "KY",
//             "zip": "40202"
//         },
//         "shipping_address": {
//             "first_name": "Bob",
//             "last_name": "Norman",
//             "address1": "Chestnut Street 92",
//             "country": "United States",
//             "country_code": "US",
//             "phone": "555-625-1199",
//             "city": "Louisville",
//             "province": "Kentucky",
//             "province_code": "KY",
//             "zip": "40202"
//         },
//         "source": "desktop_web",
//         "client_details": {
//             "accept_language": "en-CA",
//             "user_agent": "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)"
//         }
//     }
// }
// const str = JSON.stringify(jsonData);

// //using the following to pull the HTML DOM element and using the JSON.stringify function to make it readeable
// const displayMessage1 = function (message) {
//     document.querySelector('#exampleFormControlTextarea1').textContent = JSON.stringify(message, undefined, 2);
// };
// const displayMessage2 = function (message) {
//     document.querySelector('#exampleFormControlTextarea2').textContent = JSON.stringify(message, undefined, 2);
// };
// //pulling the /dedice master json file from the folder
// fetch("./decide.json")
//     .then(response => {
//         return response.json();
//     })
//     .then(origObj => displayMessage1(origObj));

// //pulling the compare json file from the folder 
// fetch("./compare.json")
//     .then(response2 => {
//         return response2.json();
//     })
//     .then(newObj => displayMessage2(newObj));

// for (var i = 0; i < str.length; i++) {
//     console.log("jsonData index: " + i);
//     var obj = str[i];
//     //console.log(str);
//     console.log(jsonData);
//     // for (var key in obj) {
//     //     var value = obj[key];
//     //     console.log("Key - " + key + ": " + value);
//     // }
// }

// async function populate() {
//     const requestURL = './decide.json';

//     const request = new Request(requestURL);

//     const response = await fetch(request);

//     const masterJson = await response.json();
//     return masterJson;
// }


// var master = populate()

// console.log('you can do it, dont give up!')

// console.log(data);
// console.log(master.f); 

const data = {
    "order": {
        "id": "12390123",
        "email": "sebastian@hostmail.com",
        "created_at": "2020-06-15T11:00:00-05:00",
        "currency": "USD",
        "updated_at": "2020-07-15T11:00:00-05:00",
        "gateway": "authorize_net",
        "browser_ip": "111.111.111.111",
        "total_price": 319,
        "total_discounts": 10,
        "cart_token": "68778783ad298f1c80c3bafcddeea02f",
        "device_id": "01234567-89ABCDEF-01234567-89ABCDEF",
        "referring_site": "facebook.com",
        "line_items": [
            {
                "price": 329,
                "quantity": 1,
                "title": "Apple Watch Series 3 GPS, 38mm Silver Aluminum Case with Fog Sport Band",
                "product_id": "632910392",
                "category": "electronics",
                "brand": "apple",
                "product_type": "physical"
            }
        ],
        "discount_codes": [
            {
                "amount": 10,
                "code": "TENOFF"
            }
        ],
        "shipping_lines": [
            {
                "price": 0,
                "title": "Free Shipping"
            }
        ],
        "payment_details": [
            {
                "credit_card_bin": "414049",
                "avs_result_code": "A",
                "cvv_result_code": "M",
                "credit_card_number": "XXXX-XXXX-XXXX-4242",
                "credit_card_company": "Visa",
                "stored_payment_created_at": "2019-08-21T12:50:00+00:00",
                "stored_payment_updated_at": "2020-01-13T12:51:00+00:00"
            }
        ],
        "customer": {
            "email": "bob.norman@hostmail.com",
            "verified_email": true,
            "first_name": "Bob",
            "last_name": "Norman",
            "id": "207119551",
            "created_at": "2019-08-21T13:36:50-04:00",
            "account_type": "registered"
        },
        "billing_address": {
            "first_name": "Bob",
            "last_name": "Norman",
            "address1": "Chestnut Street 92",
            "country": "United States",
            "country_code": "US",
            "phone": "555-625-1199",
            "city": "Louisville",
            "province": "Kentucky",
            "province_code": "KY",
            "zip": "40202"
        },
        "shipping_address": {
            "first_name": "Bob",
            "last_name": "Norman",
            "address1": "Chestnut Street 92",
            "country": "United States",
            "country_code": "US",
            "phone": "555-625-1199",
            "city": "Louisville",
            "province": "Kentucky",
            "province_code": "KY",
            "zip": "40202"
        },
        "source": "desktop_web",
        "client_details": {
            "accept_language": "en-CA",
            "user_agent": "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)"
        }
    }
}

const master = {
    "order": {
        "id": "12390123",
        "email": "sebastian@hostmail.com",
        "created_at": "2020-06-15T11:00:00-05:00",
        "currency": "USD",
        "updated_at": "2020-07-15T11:00:00-05:00",
        "gateway": "authorize_net",
        "browser_ip": "111.111.111.111",
        "total_price": 319,
        "total_discounts": 10,
        "cart_token": "68778783ad298f1c80c3bafcddeea02f",
        "device_id": "01234567-89ABCDEF-01234567-89ABCDEF",
        "referring_site": "facebook.com",
        "line_items": [
            {
                "price": 329,
                "quantity": 1,
                "title": "Apple Watch Series 3 GPS, 38mm Silver Aluminum Case with Fog Sport Band",
                "product_id": "632910392",
                "category": "electronics",
                "brand": "apple",
                "product_type": "physical"
            }
        ],
        "discount_codes": [
            {
                "amount": 10,
                "code": "TENOFF"
            }
        ],
        "shipping_lines": [
            {
                "price": 0,
                "title": "Free Shipping"
            }
        ],
        "payment_details": [
            {
                "credit_card_bin": "414049",
                "avs_result_code": "A",
                "cvv_result_code": "M",
                "credit_card_number": "XXXX-XXXX-XXXX-4242",
                "credit_card_company": "Visa",
                "stored_payment_created_at": "2019-08-21T12:50:00+00:00",
                "stored_payment_updated_at": "2020-01-13T12:51:00+00:00"
            }
        ],
        "customer": {
            "email": "bob.norman@hostmail.com",
            "verified_email": true,
            "first_name": "Bob",
            "last_name": "Norman",
            "id": "207119551",
            "created_at": "2019-08-21T13:36:50-04:00",
            "account_type": "registered"
        },
        "billing_address": {
            "first_name": "Bob",
            "last_name": "Norman",
            "address1": "Chestnut Street 92",
            "country": "United States",
            "country_code": "US",
            "phone": "555-625-1199",
            "city": "Louisville",
            "province": "Kentucky",
            "province_code": "KY",
            "zip": "40202"
        },
        "shipping_address": {
            "first_name": "Bob",
            "last_name": "Norman",
            "address1": "Chestnut Street 92",
            "country": "United States",
            "country_code": "US",
            "phone": "555-625-1199",
            "city": "Louisville",
            "province": "Kentucky",
            "province_code": "KY",
            "zip": "40202"
        },
        "source": "desktop_web",
        "client_details": {
            "accept_language": "en-CA",
            "user_agent": "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)"
        }
    }
}

// for (const [key, value] of Object.entries(data)) {
//     console.log(`${key}: ${value}`);
//     for (const [key1, value1] of Object.entries(value)) {
//         console.log(`${key1}: ${value1}`);
//     }
// }

function process(key, value) {
    //console.log(key + " : " + value);
}

function traverse(o, func) {
    for (var i in o) {
        func.apply(this, [i, o[i]]);
        if (o[i] !== null && typeof (o[i]) == "object") {
            //going one step down in the object tree!!
            traverse(o[i], func);
        }
    }
}

//that's all... no magic, no bloated framework
const values = traverse(data, process);
const values2 = traverse(master, process);



// const map = new Map(Object.entries(data));

// console.log(map);

// for (var i = 0; i < data.length; i++) {
//     Object.keys(data.order[i]).forEach(function (key) {
//         if (keys.indexOf(key) == -1) {
//             keys.push(key);
//         }
//     });
// }
// console.log(keys);

// function checkEqualKeys(obj1, obj2) {
//     var keys1 = JSON.stringify(Object.keys(obj1));
//     const keys2 = Object.keys(obj2);

//     console.log(keys1);
//     // for (let key of keys1) {
//     //     if (obj1[key] !== obj2[key]) {
//     //         console.log(obj1[key]);
//     //         console.log(obj2[key]);
//     //         return false;
//     //     }

//     // }
//     return true
// }

// console.log(checkEqualKeys(data, master)); 