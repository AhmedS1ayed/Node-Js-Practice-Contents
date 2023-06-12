const lib = require("../lib");
const db = require("../db");
const mail = require("../mail");
const absolute = lib.absolute;
const greet = lib.greet;
const getCurrencies = lib.getCurrencies;
const getProduct = lib.getProduct;
const registerUser = lib.registerUser;
const applyDiscount = lib.applyDiscount;

//Testing Numbers
describe("absolute - ", () => {
  it("should return positive if input is positive", () => {
    const result = absolute(1);
    expect(result).toBe(1);
  });

  it("should return positive if input is negative", () => {
    const result = absolute(-1);
    expect(result).toBe(1);
  });

  it("should return zero if zero", () => {
    const result = absolute(0);
    expect(result).toBe(0);
  });
});

//Testing Strings
describe("greet - ", () => {
  it("should return zero if zero", () => {
    const result = greet("Ahmed");
    expect(result).toMatch(/Ahmed/);
  });
});

//Testing Arrays
describe("currencies - ", () => {
  it("should return array of currencies", () => {
    const result = getCurrencies();
    // expect(result).toContain('USD');
    // expect(result).toContain('AUD');
    // expect(result).toContain('EUR');

    expect(result).toEqual(expect.arrayContaining(["EUR", "AUD", "USD"]));
  });
});

//Testing Objects
describe("getProduct - ", () => {
  it("should return the specified objects", () => {
    const result = getProduct(1);
    // expect(result).toEqual({id:1 , price:10});
    expect(result).toMatchObject({ id: 1 });
    expect(result).toHaveProperty("id", 1);
  });
});

//Testing Exceptions & Objects
describe("registerUser - ", () => {
  it("should throw if username is falsy", () => {
    const args = [null, undefined, false, true, "", 0, NaN, { name: "Aatrox" }];
    args.forEach((element) => {
      expect(() => registerUser(element)).toThrow();
    });
  });

  it("should return object with specified username and id > 0 - ", () => {
    const args = ["Ahmed", "Mohamed", "Musashi", "Baki"];
    args.forEach((element) => {
      const result = registerUser(element);
      expect(result).toMatchObject({ username: element });
      expect(result.id).toBeGreaterThan(0);
    });
  });
});

//Testing db (apply mock functions the old way)
describe("applyDiscount - ", () => {
  it("should apply 10% discount", () => {
    db.getCustomerSync = function (id) {
      console.log("fake reading customer");
      return { id: id, points: 20 };
    };
    const order = { customerId: 1, totalPrice: 10 };
    applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});

//Testing db (apply mock functions using jest)
describe("notifyCustomer - ", () => {
  it("should send an email to the customer", () => {
    db.getCustomerSync = jest.fn().mockReturnValue({email:'a'});
    mail.send = jest.fn();
    lib.notifyCustomer({ customerId: 1 });
    expect(mail.send).toHaveBeenCalled();
    // first argument of mail.send
    expect(mail.send.mock.calls[0][0]).toBe('a');
    // second argument of mail.send
    expect(mail.send.mock.calls[0][1]).toMatch(/order/);
  });
});
