const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../../../model/User").User;
const validateUser = require("../../../model/User").validateUser;

describe("user.generateAuthToken - ", () => {
  it("should return matched object", () => {
    //make up a user and use the function
    const user = new User({ name: "Ahmed", isAdmin: true });
    const token = user.generateAuthToken();
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));

    expect(decoded).toMatchObject({ name: "Ahmed", isAdmin: true });
  });
});

describe("user validate - ", () => {
  it("should return the object", () => {
    const result = validateUser({name: "Ahmed",email: "ahmed@gmail.com",password: "1234567",isAdmin: true});
    expect(result.error).toBe(undefined);
  });
});

describe("user validate - ", () => {
  it("should return error as name is less than 3", () => {
    const result = validateUser({name: "A",email: "ahmed@gmail.com",password: "1234567",isAdmin: true});
    expect(result.error).not.toBe(undefined);
  });
});

describe("user validate - ", () => {
  it("should return error as gmail is less than 3", () => {
    const result = validateUser({name: "Ahmed",email: "a",password: "1234567",isAdmin: true});
    expect(result.error).not.toBe(undefined);
  });
});

describe("user validate - ", () => {
  it("should return error as password is required", () => {
    const result = validateUser({name: "Ahmed",email: "ahmed@gmail.com",isAdmin: true});
    expect(result.error).not.toBe(undefined);
  });
});