
// import React from "react";
// import { useDispatch } from "react-redux";
// import { deleteHabit } from "../../action";
// import styles from "../../styles/home.module.css";
// import ActionButton from "./ActionButton";

// const HabitCard = (props) => {
//   const { habit } = props;
//   var target = 5 ; 
//   var progress = 0  ; 

//   for(let i= 0 ; i < 6 ; i++){
//     if(habit.weekdays[i].doneStatus === "done"){
//       progress++ ; 
//     }
//   }
//   const dispatch = useDispatch();

//   const handleDeleteHabit = () => {
//     dispatch(deleteHabit(habit.id));
//   };

//   return (
//     <div className={styles.habitCardContainer}>
//       <div className={styles.habitCard}>
//         <div className={styles.habitCardTitle}>
//           <div className={styles.habitActionName}>
//             <span>
//               <ActionButton habit={habit} />
//             </span>
//             <span className={styles.cardName}>
//                { `:   ${habit.name}` }
//             </span>
//           </div>
//           <div>
// //           <i className="fa-solid fa-trash " onClick={handleDeleteHabit} style={{cursor:"pointer"}}></i>
// //           </div>

// //         </div>

// //         <div className={styles.weeklyProgress}>
// //           <span>Target : {target} days / week</span>
// //           <span>Progress :{progress}  / {target} </span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HabitCard;


// import React from "react";
// import { useDispatch } from "react-redux";
// import { deleteHabit } from "../../action";
// import styles from "../../styles/home.module.css";
// import ActionButton from "./ActionButton";
// import 'bootstrap/dist/css/bootstrap.min.css';


// const HabitCard = (props) => {
//   const { habit } = props;
//   const target = 5 ; 
//   let progress = 0;

//   for (let i = 0; i < 6; i++) {
//     if (habit.weekdays[i].doneStatus === "done") {
//       progress++;
//     }
//   }

//   const dispatch = useDispatch();

//   const handleDeleteHabit = () => {
//     dispatch(deleteHabit(habit.id));
//   };

//   return (
//     <div className={styles.habitCardContainer}>
//       <div className={styles.habitCard}>
//         <div className={styles.habitCardTitle}>
//           <div className={styles.habitActionName}>
//             <span>
//               <ActionButton habit={habit} />
//             </span>
//             <span className={styles.cardName}>
//               {` - ${habit.name}`}
//             </span>
//           </div>
//           <div>
//             <i
//               className="fa-solid fa-trash"
//               onClick={handleDeleteHabit}
//               style={{ cursor: "pointer" }}
//             ></i>
//           </div>
//         </div>

//         <div className={styles.weeklyProgress}>
//           <span>Target: {target} days per week</span>
//           <span>Progress: {progress} / {target}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HabitCard;


// import React from "react";
// import { useDispatch } from "react-redux";
// import { deleteHabit } from "../../action";
// import styles from "../../styles/home.module.css";
// import ActionButton from "./ActionButton";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const HabitCard = (props) => {
//   const { habit } = props;
//   const target = 5 ; 
//   let progress = 0;

//   for (let i = 0; i < 6; i++) {
//     if (habit.weekdays[i].doneStatus === "done") {
//       progress++;
//     }
//   }

//   const dispatch = useDispatch();

//   const handleDeleteHabit = () => {
//     dispatch(deleteHabit(habit.id));
//   };

//   return (
//     <div className={styles.habitCardContainer}>
//       <div className={styles.habitCard}>
//         <div className={styles.habitCardTitle}>
//           <div className={styles.habitActionName}>
//             <span>
//               <ActionButton habit={habit} />
//             </span>
//             <span className={styles.cardName}>
//               {` - ${habit.name}`}
//             </span>
//           </div>
//           <div>
//             <i
//               className="fa-solid fa-trash"
//               onClick={handleDeleteHabit}
//               style={{ cursor: "pointer" }}
//             ></i>
//           </div>
//         </div>

//         <div className={styles.weeklyProgress}>
//           <div className={styles.progressContainer}>
//             <div className={styles.progressBackground}></div>
//             <div
//               className={styles.progressBar}
//               style={{ width: `${(progress / target) * 100}%` }}
//             ></div>
//           </div>
//           <div className={styles.progressText}>
//             <span className={styles.progressLabel}>
//               Target: {target} days per week
//             </span>
//             <span className={styles.progressLabel}>
//               Progress: {progress} / {target}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HabitCard;


import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../../action";
import styles from "../../styles/home.module.css";
import ActionButton from "./ActionButton";
import 'bootstrap/dist/css/bootstrap.min.css';


const HabitCard = (props) => {
  const { habit } = props;
  const target = 5;
  let progress = 0;

  for (let i = 0; i < 6; i++) {
    if (habit.weekdays[i].doneStatus === "done") {
      progress++;
    }
  }

  const dispatch = useDispatch();

  const handleDeleteHabit = () => {
    dispatch(deleteHabit(habit.id));
  };

  return (
    <div className={styles.habitCardContainer}>
      <div className={styles.habitCard}>
        <div className={styles.habitCardTitle}>
          <div className={styles.habitActionName}>
            <span>
              <ActionButton habit={habit} />
            </span>
            <span className={styles.cardName}>
              {` - ${habit.name}`}
            </span>
          </div>
          <div>
            <i
              className="fa-solid fa-trash"
              onClick={handleDeleteHabit}
              style={{ cursor: "pointer", color: "#dc3545" }}
            ></i>
          </div>
        </div>

        <div className={styles.weeklyProgress}>
          <span className={styles.targetProgress}>
            <span className={styles.progressLabel}>Target:</span>
            <span className={styles.progressValue}>{target} days per week</span>
          </span>
          <span className={styles.actualProgress}>
            <span className={styles.progressLabel}>Progress:</span>
            <span className={styles.progressValue}>{progress} / {target}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HabitCard;
