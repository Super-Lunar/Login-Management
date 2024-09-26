//hashing
//converting  one readable text to unreadable  text
import bcrypt from "bcrypt";
let password = "password@123"
let hashedPassword = await bcrypt.hash(password, 10)
console.log(hashedPassword);

//$2b$10$afLLIEy9IDfSFTWRvHjZYuuzo03.rqH3Tn2XUYdiB/iPuD19EuF2y
//compare



// let isValidPassword=await bcrypt.compare(
//     "password@123",
// "$2b$10$afLLIEy9IDfSFTWRvHjZYuuzo03.rqH3Tn2XUYdiB/iPuD19EuF2y"


// );
// console.log(isValidPassword)