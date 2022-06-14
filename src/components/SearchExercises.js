import React, { useEffect, useState } from 'react';
import {Box, Button, Stack, TextField, Typography} from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";

import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = () => {
    const [search, setSearch] = useState('');
    const [exercises, setExercises] = useState([]);
    const [bodyParts, setBodyParts] = useState([]);

    const fetchExercisesData = async () => {
        const data = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPartList`, exerciseOptions);
        console.log(data);
        setBodyParts(data);
    }

    useEffect(() => {
        fetchExercisesData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            const filteredExercises = exerciseData.filter(exercise => exercise.name.toLowerCase().includes(search)
                                                                      || exercise.bodyPart.toLowerCase().includes(search)
                                                                      || exercise.target.toLowerCase().includes(search)
                                                                      || exercise.equipment.toLowerCase().includes(search));
            setSearch('');
            setExercises(filteredExercises);
        }
    }
    return (
        <Stack justifyContent="center" alignItems="center" mt="37px" p="20px">
            <Typography fontWeight="700" textAlign="center" mb="50px" sx={{fontSize:{lg:"44px", xs:"30px"}}}>
                Awesome Exercises You Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: {
                            fontWeight: "700",
                            border: "none",
                            borderRadius: "4px",
                        },
                        width:{
                            lg: "1000px",
                            xs: "350px"
                        },
                        backgroundColor: "#fff",
                        borderRadius: "40px",
                        mr: "10px",
                    }}
                    height="76px"
                    value={search}
                    onChange={(e) => {(e.target.value) ? setSearch(e.target.value.toLowerCase()) : setSearch('')}}
                    placeholder="Search for an exercise"
                    type={'text'}
                />
                <Button className="search-btn"
                    sx={{
                        backgroundColor: "#FF2625",
                        color: "#fff",
                        textTransform: "capitalize",
                        width: {
                            lg: "175px",
                            xs: "80px"
                        },
                        fontSize: {
                            lg: "20px",
                            xs: "14px"
                        },
                        height: "56px",
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{
                position: "relative",
                width: "100%",
                p: "20px",
            }}>
                <HorizontalScrollbar data={bodyParts}/>
            </Box>
        </Stack>
    );
};

export default SearchExercises;
