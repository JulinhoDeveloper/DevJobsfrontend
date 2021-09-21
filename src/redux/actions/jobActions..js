
import axios from "axios";
export const getAllJobs = () => async dispatch => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("/api/jobs/getalljobs");
    dispatch({ type: "GET_ALL_JOBS", payload: response.data });
    
  } catch (error) {
    console.log(error);
   
  }
};