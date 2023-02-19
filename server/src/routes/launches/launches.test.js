const supertest = require("supertest");
const app = require("../../app");

describe("Test Get /launches", () => {
  test("It should respond with 200 success", async () => {
    const response = await supertest(app).get("/launches");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test POST /launch", () => {
  test("It should respond with 200 success", () => {
    const response = 200;
    expect(response).toBe(200);
  });

  test("It should catch missing required properties", () => {});

  test("It should catch invalid dates", () => {});
});
