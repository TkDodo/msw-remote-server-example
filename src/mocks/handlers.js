import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/user", () => {
    return HttpResponse.json({
      firstName: "John",
      lastName: "Maverick",
    });
  }),
];
