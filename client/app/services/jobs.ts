import apiUrl from "../shared/apiUrl";
import axios from "axios";
const jobsUrl: string = apiUrl + "/jobs";

const getJobsByCompany = async (companyId: number) => {
  try {
    const response = await axios.get(`${jobsUrl}/${companyId}`);
    const { jobs } = response.data;
    return jobs;
  } catch (err) {
    console.error("Error Getting jobs :", err);
    throw err;
  }
};

const jobsService = {
  getJobsByCompany,
};

export default jobsService;
