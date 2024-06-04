import axios from "axios";
import { APIEndpoints } from "../../common/enums/APIEndpoints";

export const fetchCourses = async () => {
  const response = await axios.get(APIEndpoints.COURSES_GET);
  return response?.data;
};
