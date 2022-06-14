import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { Box } from '@mui/material';

import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

import { exerciseOptions, fetchData } from "../utils/fetchData";

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    //get the id from the url
    const {id} = useParams();
    useEffect(() => {
        console.log("exerciseDetail", id);
        const getExerciseDetail = async () => {
            const eDetail = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);
            console.log("eDetail", eDetail);
            setExerciseDetail(eDetail);
        }
        getExerciseDetail();
    }, [id]);

    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail}/>
            <ExerciseVideos />
            <SimilarExercises />
        </Box>
    );
};

export default ExerciseDetail;
