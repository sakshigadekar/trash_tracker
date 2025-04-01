import React from "react"
import { price } from "../../dummydata"

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className='items shadow'>
          <h4>{val.name}</h4>
          <h1>
          <img src={val.cover} />
            {val.price}
          </h1>
          <p>{val.desc}</p>
          <button className='outline-btn'>Earn Badge</button>
        </div>
      ))}
    </>
  )
}

export default PriceCard



// import React, { useState, useEffect } from "react";
// import { Box, Typography, Grid } from "@mui/material";
// import TopLeaderCard from "../leaderboard/TopLeaderCard.jsx";
// import RankBar from "../leaderboard/RankBar.jsx";
// import { useFetch } from "./useFetch.js";


// const LeaderboardPage = () => {
// //   const [data, setData] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);

// //   // Simulate fetching data
// //   useEffect(() => {
// //     // Replace this with your actual data fetching logic
// //     const fetchData = async () => {
// //       // Simulating data fetch
// //       const response = await fetch("your-api-endpoint-here");
// //       const fetchedData = await response.json();
// //       setData(fetchedData);
// //       setIsLoading(false);
// //     };

// //     fetchData();
// //   }, []);

// //   const dataModified = isLoading
// //     ? []
// //     : data.sort((a, b) => b.experience - a.experience);

// //   const dataArray = dataModified.map((item, index) => {
// //     return {
// //       ...item,
// //       ranking: index + 1,
// //       hours: Math.floor(item?.experience / 240),
// //       profile: `/src/assets/profiles/${item.profile}`,
// //     };
// //   });

// //   const podiumArray = dataArray.slice(0, 3);
// //   const rankingArray = dataArray.slice(3);
// //   const heightPercent = ["10%", "30%", "5%", "8%", "47%"];


// const { data, isLoading } = useFetch("users");
// const dataModified = isLoading
//   ? []
//   : data.sort((a, b) => b.experience - a.experience);
// const dataArray = dataModified.map((item, index) => {
//   return {
//     ...item,
//     ranking: index + 1,
//     hours: Math.floor(item?.experience / 240),
//     profile: `/src/assets/profiles/${item.profile}`,
//   };
// });

// const podiumArray = dataArray.slice(0, 3);
// const rankingArray = dataArray.slice(3);
// const heightPercent = ["10%", "30%", "5%", "8%", "47%"];

//   return (
//     <div>
//       <Box
//         margin={3}
//         marginLeft={6}
//         display={"flex"}
//         flexDirection={"column"}
//         justifyContent={"flex-start"}
//         style={{
//           width: "100%",
//           height: "100%",
//         }}
//       >
//         <Typography
//           marginLeft={1.7}
//           style={{
//             textAlign: "flex-start",
//             fontSize: "2.5rem",
//             color: "black",
//             flexGrow: "0.6",
//           }}
//         >
//           Top Users
//         </Typography>

//         <Box
//           display={"flex"}
//           flexDirection={"row"}
//           justifyContent={"space-around"}
//           alignItems={"space-between"}
//           style={{
//             width: "100%",
//             height: heightPercent[1],
//           }}
//         >
//           {podiumArray?.map(({ profile, username, ranking, hours }, index) => (
//             <Box
//               display={"flex"}
//               flexDirection={"row"}
//               justifyContent={"space-around"}
//               style={{
//                 width: "100%",
//                 height: "100%",
//               }}
//               key={index}
//             >
//               <TopLeaderCard
//                 profileImage={profile}
//                 name={username}
//                 ranking={ranking}
//                 hours={hours}
//               />
//             </Box>
//           ))}
//         </Box>
//         <Box
//           display={"flex"}
//           flexDirection={"row"}
//           style={{
//             width: "100%",
//             height: heightPercent[2],
//           }}
//         >
//           <Typography
//             marginLeft={2}
//             style={{
//               textAlign: "flex-start",
//               fontSize: "1.3rem",
//               color: "black",
//               flexGrow: "0.6",
//             }}
//           >
//             All Users
//           </Typography>
//         </Box>
//         <Box
//           display={"flex"}
//           marginLeft={1.7}
//           paddingBottom={1}
//           flexDirection={"row"}
//           style={{
//             width: "92%",
//             height: heightPercent[3],
//           }}
//         >
//           <RankBar
//             profileImage={""}
//             rankValue={"RANK"}
//             name={"NAME"}
//             xpValue={"XP"}
//             assetValue={"COINS"}
//             hours={"HOURS"}
//           />
//         </Box>
//         <Box
//           marginLeft={1.7}
//           style={{ width: "92%", height: heightPercent[4], overflowY: "auto" }}
//         >
//           <Grid
//             container
//             rowSpacing={1}
//             style={{
//               width: "100%",
//               height: "100%",
//               margin: 0,
//               overflow: "hidden",
//             }}
//           >
//             {rankingArray
//               .slice(0, 5)
//               .map(
//                 (
//                   { ranking, profile, username, hours, experience, coins },
//                   index
//                 ) => (
//                   <Grid key={index} item xs={12}>
//                     <RankBar
//                       profileImage={profile}
//                       name={username}
//                       hours={hours}
//                       assetValue={coins}
//                       xpValue={experience}
//                       rankValue={ranking}
//                     />
//                   </Grid>
//                 )
//               )}
//           </Grid>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default LeaderboardPage;




