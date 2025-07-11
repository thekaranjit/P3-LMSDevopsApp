import { http, HttpResponse } from "msw";

// Mock Data
import { courseData, courses } from "./mock-data/courses";

// Define handlers that catch the corresponding requests and return the mock data
export const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/student/courses`, () => {
    return HttpResponse.json(courses, { status: 200 });
  }),
  http.get(`${import.meta.env.VITE_API_URL}/student/getCourse/:id`, () => {
    return HttpResponse.json(courseData, { status: 200 });
  })
];
