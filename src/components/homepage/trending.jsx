import React from "react";
import { Box, Typography } from "@mui/material";
import Img1 from "../../assets/Home/Img2.svg"; // Background for cards
import Img2 from "../../assets/Home/Img4.png"; // Card 1
import Img3 from "../../assets/Home/Img5.png"; // Card 2
import StarIcon from "@mui/icons-material/StarBorder"; // Favorite Icon

function Trending() {
    const trendingItems = [
        { img: Img2, label: "Brunch" },
        { img: Img3, label: "Milestone birthdays" },
    ];

    return (
        <Box sx={{ textAlign: "center", pt: {md:"100px",xs:"50px"}, pb: {md:"120px",xs:"30px"} }}>
            {/* Title */}
            <Typography variant="h4" fontWeight="bold" mb={5}>
                Explore what's trending
            </Typography>

            {/* Flex Container without Grid */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center", // ✅ Centering items
                    gap: "20px", // ✅ Reduced space between cards
                    flexWrap: "wrap", // ✅ Ensures responsiveness
                }}
            >
                {trendingItems.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            backgroundImage: `url(${Img1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "20px",
                            pt: 2,
                            height: "420px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100%",
                            maxWidth: "440px",
                            position: "relative",
                        }}
                    >
                        {/* Image */}
                        <Box
                            component="img"
                            src={item.img}
                            alt={item.label}
                            sx={{
                                width: "90%",
                                maxWidth: "250px",
                                borderRadius: "12px",
                                mt: "10px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            }}
                        />

                        {/* Label with Icon */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                background: "#FFFFFF",
                                borderRadius: "0 0 16px 16px",
                                padding: "12px",
                                position: "absolute",
                                width: "100%",
                                bottom: 0,
                                maxWidth: "418px",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                zIndex: 999,
                            }}
                        >
                            <Box sx={{ fontSize: "20px", fontWeight: "500" }}>
                                {item.label}
                            </Box>
                            <Box
                                sx={{
                                    background: "#9C27B0",
                                    borderRadius: "50%",
                                    width: "28px",
                                    height: "28px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                }}
                            >
                                <StarIcon sx={{ color: "white", fontSize: "18px" }} />
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default Trending;
