/* 
id card
    id card generation
        info 
        logo=>secrete key
        expiryInfo

        id card verify
*/

import  jwt from "jsonwebtoken";

//generate token 

/* let info={
    id:"123",
};

let secretkey="dw18";

let expiryInfo={
    expiresIn:"365d",
};

let myToken=jwt.sign(info,secretkey,expiryInfo);
console.log(myToken)
 */




//verify token



let  loginToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsImlhdCI6MTcyNDIyODM3NCwiZXhwIjoxNzU1NzY0Mzc0fQ.OFkfnV8-OB3jHxPVtjRW5Zbn0OECzkWmAKvv3gd1CC8"
try {
    let  myInfo=jwt.verify(loginToken,"dw18");
    /* 
    a token will be valid if token is made  from given secretekey
    token is not expire
    */
    console.log(myInfo);
} catch (error) {
    console.log(error.message);
}

