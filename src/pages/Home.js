import React, {useEffect }from 'react';
import DefaultLayout from '../components/defaultLayout';
import { getAllJobs } from "../redux/actions/jobActions.";
import { useSelector, useDispatch } from "react-redux";
function Home() {
    const { jobs } = useSelector((state) => state.jobsReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllJobs());
    }, [dispatch]);
    return (
        <div>
            <DefaultLayout>
                <h1>Home Page</h1>
                {jobs.length}
            </DefaultLayout>
        </div>
    )
}
export default Home
