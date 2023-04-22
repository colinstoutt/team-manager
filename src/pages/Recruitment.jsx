// import React, { useState } from "react";
// import Recruit from "../components/Recruit";
// import "../scss/Recruitment.scss";
// import { getUserFromToken } from "../services/tokenService";
// import AddRecruitWindow from "../components/AddRecruitWindow";
// import EditRecruitWindow from "../components/EditRecruitWindow";

// const user = getUserFromToken();

// const Recruitment = ({ data, getData }) => {
//   const [toggleAddRecruit, setToggleAddRecruit] = useState(false);
//   const [toggleEditRecruit, setToggleEditRecruit] = useState(false);

//   const loaded = () => {
//     const teams = data.data;
//     const userTeam = teams.filter((team) => team.user === user._id);

//     return (
//       <div className="recruitment">
//         {toggleAddRecruit ? (
//           <AddRecruitWindow
//             teams={teams}
//             userTeam={userTeam}
//             data={data}
//             getData={getData}
//             setToggleAddRecruit={setToggleAddRecruit}
//           />
//         ) : (
//           <div></div>
//         )}
//         <div className="recruitment__heading">
//           <h1>Recruitment</h1>

//           <button
//             className="add-button"
//             onClick={() => setToggleAddRecruit(!toggleAddRecruit)}
//           >
//             Add Recruit
//           </button>
//         </div>
//         <div className="recruitment__line-divide"></div>
//         {data.recruits
//           .filter((recruit) => recruit.team === userTeam[0]._id)
//           .map((item) => {
//             return (
//               <Recruit
//                 key={item.id}
//                 id={item._id}
//                 firstName={item.firstName}
//                 lastName={item.lastName}
//                 contact={item.contact}
//                 age={item.age}
//                 hometown={item.hometown}
//                 position={item.position}
//                 height={item.height}
//                 Weight={item.Weight}
//                 current_team={item.current_team}
//                 notes={item.notes}
//                 getData={getData}
//                 data={data}
//                 userTeam={userTeam}
//                 toggleEditRecruit={toggleEditRecruit}
//                 setToggleEditRecruit={setToggleEditRecruit}
//               />
//             );
//           })}
//       </div>
//     );
//   };
//   const loading = () => {
//     return <h1>Loading...</h1>;
//   };
//   return <div>{data ? loaded() : loading()}</div>;
// };

// export default Recruitment;
