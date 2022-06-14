import React from 'react';
import {Box, Stack, Typography} from "@mui/material";

const Footer = () => {
    const getDate = () => {
        const date = new Date();
        return date.getFullYear();
    }
    return (
        <Box mt="80px" bgcolor="#fff3f4">
            <Stack gap="40px" alignItems="center" px="40px" py="24px">
                <Typography variant="h5" color="textPrimary">
                    © {getDate()} - Atakan TEKO
                </Typography>
            </Stack>
        </Box>
    );
};

export default Footer;
