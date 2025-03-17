import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Paper,
  Grid,
  useMediaQuery,
  useTheme,
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // Import CloseIcon
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Logo from "../../assets/logo/logo.svg";

const menuItems = [
  {
    name: "Wedding",
    subMenu: {
      "Wedding Invites": [
        "Elegant",
        "Rustic",
        "Floral & Botanical",
        "Simple",
        "Modern",
        "Indian",
        "Vintage",
        "Beach",
        "Photo",
        "Destination",
        "Premium",
      ],
      "Save the date": ["Rustic", "Simple", "Destination", "Photo"],
      Party: [
        "Engagement party",
        "Bridal shower",
        "Bachelor party",
        "Bachelorette party",
        "Rehearsal dinner",
      ],
      Stationery: [
        "RSVP cards",
        "Bridesmaid cards",
        "Engagement announcements",
        "Wedding announcements",
      ],
      Greetings: ["Wedding", "Thank you", "Engagement"],
    },
  },
  {
    name: "Birthday",
    subMenu: {
      "Birthday Invites": [
        "Kids",
        "Women's",
        "Add a photo",
        "Men's",
        "Babies",
        "Teens",
        "Save the date",
        "Surprise",
      ],
      "Kids Milestones": [
        "1st birthday",
        "2nd Birthday",
        "10th Birthday",
        "13th Birthday",
        "Sweet 16",
        "Quinceañera",
        "Bar & bat mitzvah",
      ],
      "Adult Milestones": [
        "18th birthday",
        "21st birthday",
        "25th birthday",
        "30th birthday",
        "40th birthday",
        "50th birthday",
        "60th birthday",
        "70th birthday",
        "80th birthday",
        "90th birthday",
      ],
      "Invite Themes": [
        "Princess",
        "Animal",
        "Unicorn",
        "Butterfly",
        "Sleepover",
        "Dinosaur",
        "Rainbow",
        "Mermaid",
        "Gaming",
      ],
      "Birthday Cards": [
        "Kids",
        "Add a photo",
        "Funny",
        "Milestone",
        "Thank you",
        "Belated",
        "Family",
        "Cards for her",
        "Cards for him",
      ],
    },
  },
  {
    name: "Baby & Kids",
    subMenu: {
      Baby: ["Baby shower", "Gender reveal", "Baby sprinkle", "Sip & See"],
      "Baby Shower Themes": [
        "Floral",
        "Woodland",
        "Butterfly",
        "Safari",
        "Princess",
        "Rustic",
        "Elephant",
        "Rainbow",
        "Dinosaur",
        "Fiesta",
      ],
      Announcements: ["Birth", "Pregnancy"],
      Religious: [
        "Baptism & Christening",
        "Bar & Bat Mitzvah",
        "First communion",
      ],
      "Birthday Invites": ["Kids", "1st birthday", "Sweet 16", "Quinceañera"],
    },
  },
  {
    name: "Party",
    subMenu: {
      Celebrations: [
        "Graduation party",
        "Anniversary",
        "Retirement & Farewell",
        "Baby shower",
        "Engagement party",
        "Rehearsal dinner",
        "Bridal shower",
        "Bachelor party",
        "Memorial",
        "Save the date",
      ],
      Gatherings: [
        "Housewarming",
        "Dinner party",
        "Cocktail party",
        "Lunch & Brunch",
        "Family reunion",
        "Back to school",
        "Sleepover",
        "BBQ",
        "Potluck",
        "Summer & Pool",
        "Luau",
        "Sports & Games",
        "Picnic",
      ],
      Holidays: [
        "Ramadan",
        "St Patrick's Day",
        "Easter",
        "4th of July",
        "Labor Day",
        "Rosh Hashanah",
        "Halloween",
        "Diwali",
      ],
      Religious: [
        "Baptism & Christening",
        "Bar & Bat Mitzvah",
        "First communion",
      ],
      "Business Events": [
        "Gala",
        "Grand opening",
        "Open house",
        "Cocktail party",
        "Dinner party",
        "Retirement",
        "Save the date",
      ],
    },
  },
  {
    name: "Greeting Cards",
    subMenu: {
      Birthday: [
        "Kids",
        "Funny",
        "Milestone",
        "Belated",
        "Add a photo",
        "Family",
        "For her",
        "For him",
      ],
      "Events & Occasions": [
        "New baby",
        "Graduation",
        "Wedding",
        "Anniversary",
        "Retirement",
        "Engagement",
        "Bar Mitzvah",
        "New home",
      ],
      "Thank You": [
        "General",
        "Graduation",
        "Teacher appreciation",
        "For support",
        "Wedding",
        "Birthday",
        "Baby",
        "Baptism",
      ],
      "Thoughts & Feelings": [
        "Get well",
        "Sympathy",
        "Love & Romance",
        "Congratulations",
        "Good luck",
        "Sorry",
        "Miss you",
        "Farewell & Goodbye",
      ],
      Holidays: [
        "Ramadan",
        "St. Patrick's Day",
        "Easter",
        "Passover",
        "Cinco De Mayo",
        "Mother's Day",
        "Father's Day",
        "4th of July",
      ],
      Announcements: [
        "Graduation",
        "Memorial",
        "Save the date",
        "Engagement",
        "Wedding",
        "Pregnancy",
        "Birth",
        "Moving",
      ],
    },
  },
  {
    name: "Trending",
    subMenu: {
      "Brunch Invites": [],
      "Milestone Birthdays": [],
      "Ramadan Cards": [],
      "Ramadan Invites": [],
      "St. Patrick's Day Invites": [],
      "Spring Birthdays": [],
    },
  },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState(null); // Track open accordion
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : null); // Open only one accordion at a time
  };

  const renderMenuItems = () => {
    return menuItems.map((item, index) => (
      <Box
        key={index}
        onMouseEnter={() => !isMobile && setOpenMenu(item.name)}
        onMouseLeave={() => !isMobile && setOpenMenu(null)}
        sx={{ position: "relative" }}
      >
        <Button
          sx={{
            color: "black",
            fontWeight: "500",
            textTransform: "none",
            mx: "22px",
            fontSize: "15px",
          }}
        >
          {item.name}
        </Button>

        {/* Mega Menu - Full Width Row */}
        {openMenu === item.name &&
          item.subMenu &&
          Object.keys(item.subMenu).length > 0 && (
            <Paper
              elevation={3}
              sx={{
                position: "fixed",
                top: "64px", // Below the header
                left: 0,
                width: "100%",
                height: "calc(100vh - 64px)", // Full screen height minus header height
                backgroundColor: "white",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                zIndex: 1000,
                overflowY: "auto", // Enable scrolling if content is too long
              }}
            >
              <Grid
                container
                spacing={3}
                sx={{
                  maxWidth: "1200px",
                  margin: "0 auto",
                  textAlign: "left",
                }}
              >
                {Object.entries(item.subMenu).map(
                  ([category, items], subIndex) => (
                    <Grid item xs={12} sm={6} md={2} key={subIndex}>
                      <Typography
                        sx={{
                          fontWeight: "600",
                          fontSize: "14px",
                          letterSpacing: "0.7px",
                          marginBottom: "10px",
                        }}
                      >
                        {category}
                      </Typography>
                      {items.map((subItem, i) => (
                        <Typography
                          key={i}
                          sx={{
                            fontWeight: "500",
                            letterSpacing: "0.7px",
                            fontSize: "14px",
                            padding: "5px 0",
                            cursor: "pointer",
                            color: "#20282d",
                            "&:hover": {
                              color: "#1BC47D",
                            },
                          }}
                        >
                          {subItem}
                        </Typography>
                      ))}
                    </Grid>
                  )
                )}
              </Grid>
            </Paper>
          )}
      </Box>
    ));
  };

  const renderDrawer = () => (
    <Drawer
      anchor="top"
      open={drawerOpen}
      onClose={handleDrawerToggle}
      sx={{
        "& .MuiDrawer-paper": {
          width: "100%",
          bgcolor: "#fff",
          height: "100%",
        },
      }}
    >
      {/* Drawer Header with Logo and Close Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          borderBottom: "1px solid #ddd",
        }}
      >
        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: "green",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            width: "146px",
          }}
        >
          <Typography component={"img"} src={Logo} width={"100%"} />
        </Typography>

        {/* Close Button */}
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Drawer Content */}
      {menuItems.map((item, index) => (
        <Accordion
          key={index}
          expanded={expandedAccordion === `panel${index}`} // Control expanded state
          onChange={handleAccordionChange(`panel${index}`)} // Handle open/close
          elevation={0}
          sx={{ width: "100%" }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "500" }}>{item.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {Object.entries(item.subMenu).map(([category, items], subIndex) => (
              <Box key={subIndex}>
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "14px",
                    letterSpacing: "0.7px",
                    marginBottom: "10px",
                  }}
                >
                  {category}
                </Typography>
                {items.map((subItem, i) => (
                  <Typography
                    key={i}
                    sx={{
                      fontWeight: "500",
                      letterSpacing: "0.7px",
                      fontSize: "14px",
                      padding: "5px 0",
                      cursor: "pointer",
                      color: "#20282d",
                      "&:hover": {
                        color: "#1BC47D",
                      },
                    }}
                  >
                    {subItem}
                  </Typography>
                ))}
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Drawer>
  );

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: 0,
        borderBottom: "1px solid #ddd",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Left Side - Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: "green",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            width: "146px",
          }}
        >
          <Typography component={"img"} src={Logo} width={"100%"} />
        </Typography>

        {/* Center - Navigation Links */}
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {renderMenuItems()}
          </Box>
        )}

        {/* Right Side - Search Icon, Log in & Go Premium */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            position: "absolute",
            right: "20px",
          }}
        >
          {/* Search Icon */}
          {!isMobile && (
            <IconButton
              sx={{
                color: "black",
                "&:hover": {
                  backgroundColor: "#f2f2f2",
                },
              }}
            >
              <SearchIcon />
            </IconButton>
          )}

          {isMobile ? (
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#f2f2f2",
                  color: "black",
                  borderRadius: "40px",
                  fontWeight: "600",
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#e0e0e0",
                    boxShadow: "none",
                  },
                }}
              >
                Log in
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#8D51E7",
                  color: "white",
                  borderRadius: "40px",
                  fontWeight: "600",
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#7a44d6",
                    boxShadow: "none",
                  },
                }}
              >
                Go Premium
              </Button>
            </>
          )}
        </Box>
      </Toolbar>

      {/* Drawer for Mobile */}
      {isMobile && renderDrawer()}
    </AppBar>
  );
};

export default Navbar;
