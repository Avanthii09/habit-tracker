
// import React from "react";
// import { useDispatch } from "react-redux";
// import { addHabitStatus } from "../../action";
// import styles from "../../styles/home.module.css";

// const ActionButton = (props) => {
//   const { habit } = props;
//   const dispatch = useDispatch();

//   const handleNoStatus = () => {
//     const obj = {
//       id: habit.id,
//       doneStatus: "",
//     };
//     dispatch(addHabitStatus(obj));
//   };

//   const handleDoneStatus = () => {
//     const obj = {
//       id: habit.id,
//       doneStatus: "done",
//     };
//     dispatch(addHabitStatus(obj));
//   };

//   const handleNotDoneStatus = () => {
//     const obj = {
//       id: habit.id,
//       doneStatus: "notdone",
//     };
//     dispatch(addHabitStatus(obj));
//   };

//   return (
//     <div className={styles.habitCardAction}>
//       {habit.doneStatus === "" && (
//         <span className={styles.habitCardCheckIcon}>
//           <i className="fa-regular fa-square" onClick={handleDoneStatus}></i>
//         </span>
//       )}

//       {habit.doneStatus === "done" && (
//         <span className={styles.habitCardCheckIcon}>
//           <i
//             className="fa-solid fa-square-check"
//             onClick={handleNotDoneStatus}
//           ></i>
//         </span>
//       )}

//       {habit.doneStatus === "notdone" && (
//         <span className={styles.habitCardCrossIcon}>
//           <i class="fa-solid fa-square-xmark" onClick={handleNoStatus}></i>
//         </span>
//       )}
//     </div>
//   );
// };

// export default ActionButton;


// import React from "react";
// import { useDispatch } from "react-redux";
// import { addHabitStatus } from "../../action";
// import 'bootstrap/dist/css/bootstrap.min.css';

// import styles from "../../styles/home.module.css";

// const ActionButton = (props) => {
//   const { habit } = props;
//   const dispatch = useDispatch();

//   const handleNoStatus = () => {
//     const obj = {
//       id: habit.id,
//       doneStatus: "",
//     };
//     dispatch(addHabitStatus(obj));
//   };

//   const handleDoneStatus = () => {
//     const obj = {
//       id: habit.id,
//       doneStatus: "done",
//     };
//     dispatch(addHabitStatus(obj));
//   };

//   const handleNotDoneStatus = () => {
//     const obj = {
//       id: habit.id,
//       doneStatus: "notdone",
//     };
//     dispatch(addHabitStatus(obj));
//   };

//   return (
//     <div className={styles.habitCardAction}>
//       {habit.doneStatus === "" && (
//         <span className={styles.habitCardCheckIcon}>
//           <i className="fa-regular fa-square" onClick={handleDoneStatus}></i>
//           <p>Not Done</p>
//         </span>
//       )}

//       {habit.doneStatus === "done" && (
//         <span className={styles.habitCardCheckIcon}>
//           <i
//             className="fa-solid fa-check-square"
//             onClick={handleNotDoneStatus}
//           ></i>
//           <p>Done</p>
//         </span>
//       )}

//       {habit.doneStatus === "notdone" && (
//         <span className={styles.habitCardCrossIcon}>
//           <i class="fa-solid fa-times-square" onClick={handleNoStatus}></i>
//           <p>Failed</p>
//         </span>
//       )}
//     </div>
//   );
// };

// export default ActionButton;

import React from "react";
import { useDispatch } from "react-redux";
import { addHabitStatus } from "../../action";
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from "../../styles/home.module.css";

const ActionButton = (props) => {
  const { habit } = props;
  const dispatch = useDispatch();

  const handleNoStatus = () => {
    const obj = {
      id: habit.id,
      doneStatus: "",
    };
    dispatch(addHabitStatus(obj));
  };

  const handleDoneStatus = () => {
    const obj = {
      id: habit.id,
      doneStatus: "done",
    };
    dispatch(addHabitStatus(obj));
  };

  const handleNotDoneStatus = () => {
    const obj = {
      id: habit.id,
      doneStatus: "notdone",
    };
    dispatch(addHabitStatus(obj));
  };

  return (
    <div className={styles.habitCardAction}>
      {habit.doneStatus === "" && (
        <span className={styles.habitCardCheckIcon}>
          <i 
            className="fa-regular fa-square"
            onClick={handleDoneStatus}
            onMouseEnter={e => e.target.classList.add(styles.hovered)}
            onMouseLeave={e => e.target.classList.remove(styles.hovered)}
          ></i>
          <p>Not Done</p>
        </span>
      )}

      {habit.doneStatus === "done" && (
        <span className={styles.habitCardCheckIcon}>
          <i
            className="fa-solid fa-check-square"
            onClick={handleNotDoneStatus}
            onMouseEnter={e => e.target.classList.add(styles.hovered)}
            onMouseLeave={e => e.target.classList.remove(styles.hovered)}
          ></i>
          <p>Done</p>
        </span>
      )}

      {habit.doneStatus === "notdone" && (
        <span className={styles.habitCardCrossIcon}>
          <i 
            className="fa-solid fa-times-square"
            onClick={handleNoStatus}
            onMouseEnter={e => e.target.classList.add(styles.hovered)}
            onMouseLeave={e => e.target.classList.remove(styles.hovered)}
          ></i>
          <p>Failed</p>
        </span>
      )}
    </div>
  );
};

export default ActionButton;

