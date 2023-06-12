const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../../../model/User").User;

describe("generateAuthToken - ", () => {
  it("should return matched object", () => {
    //make up a user and use the function 
    const user = new User({name:"Ahmed", isAdmin:true});
    const token = user.generateAuthToken();
    const decoded = jwt.verify(token,config.get('jwtPrivateKey'));
    
    expect(decoded).toMatchObject({name:"Ahmed",isAdmin:true});
  });
});
