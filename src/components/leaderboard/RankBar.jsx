import { Avatar, Box, Typography } from "@mui/material";

/**
 * This rank bar is used to display user's rank, profile image, name, xp value, coins, and hours
 * on the leader board page.
 */

const RankBar = ({
  rankValue,
  profileImage,
  name,
  xpValue,
  assetValue,
  hours,
}) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      sx={{
        height: "100%",
        width: "100%",
        borderRadius: "10px",
        background: "rgba(255, 255, 255, .5)",
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "medium",
          fontSize: "1em",
          color: "white",
          mr: "0.5rem",
          overflow: "hidden",
          flex: 1,
        }}
      >
        {rankValue?.toLocaleString()}
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={profileImage === "" ? "center" : "flex-start"}
        sx={{
          flex: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {profileImage !== "" && <Avatar src={profileImage} sx={{ mr: 1 }} />}
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "medium",
            fontSize: "1em",
            color: "white",
            mr: "0.5rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {name}
        </Typography>
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "medium",
          fontSize: "1em",
          color: "white",
          mr: "0.5rem",
          overflow: "hidden",
          flex: 1,
        }}
      >
        {xpValue?.toLocaleString()}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "medium",
          fontSize: "1em",
          color: "white",
          mr: "0.5rem",
          overflow: "hidden",
          flex: 1,
        }}
      >
        {assetValue?.toLocaleString()}
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "medium",
          fontSize: "1em",
          color: "white",
          mr: "0.5rem",
          overflow: "hidden",
          flex: 1,
        }}
      >
        {hours?.toLocaleString()}
      </Typography>
    </Box>
  );
};

export default RankBar;
