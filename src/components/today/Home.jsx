
// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import styles from "../../styles/home.module.css";
// import { addHabit } from "../../action";
// import HabitCard from "./HabitCard";


// const Home = () => {
//     const [inputData, setInputData] = useState('');

//     const habits = useSelector((state) => state.habitsReducer);
//     // console.log(habits);
//     const dispatch = useDispatch();

//     const handleAddHabit = () => {
//         if(inputData.length === 0 ){
//             return window.alert("Please Enter Your Habit")
//         }
//         dispatch(addHabit(inputData));
//         setInputData('');
//     }

//     return (
//         <div className={styles.container}>
//             <div className={styles.todaysDate}>
//                 { }
//             </div>
//             <div className={styles.addHabit}>
//                 <input type="text" placeholder="Add Habit..." value={inputData} onChange={(event) => setInputData(event.target.value)} required />
//                 <i class="fa-solid fa-plus" onClick={handleAddHabit} ></i>
//             </div>
//             <div className={styles.listHabit}>
//                 {habits.list.map((habit) => (
//                     <HabitCard habit={habit} key={habit.id} />
//                 ))
//                 }
//             </div>

//         </div>
//     );
// };

// export default Home;

// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import styles from "../../styles/home.module.css";
// import { addHabit } from "../../action";
// import HabitCard from "./HabitCard";
// import 'bootstrap/dist/css/bootstrap.min.css';


// const Home = () => {
//   const [inputData, setInputData] = useState("");

//   const habits = useSelector((state) => state.habitsReducer);
//   const dispatch = useDispatch();

//   const handleAddHabit = () => {
//     if (inputData.length === 0) {
//       return window.alert("Please Enter Your Habit");
//     }
//     dispatch(addHabit(inputData));
//     setInputData("");
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.todaysDate}>
//         <h2>Today's Date</h2>
//         <p>{new Date().toLocaleDateString()}</p>
//       </div>
//       <div className={styles.addHabit}>
//         <input
//           type="text"
//           placeholder="Add a new habit"
//           value={inputData}
//           onChange={(event) => setInputData(event.target.value)}
//           required
//         />
//         <button onClick={handleAddHabit}>Add Habit</button>
//       </div>
//       <div className={styles.listHabit}>
//         {habits.list.map((habit) => (
//           <HabitCard habit={habit} key={habit.id} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import styles from "../../styles/home.module.css";
// import { addHabit } from "../../action";
// import HabitCard from "./HabitCard";
// import 'bootstrap/dist/css/bootstrap.min.css';


// const Home = () => {
//   const [inputData, setInputData] = useState("");

//   const habits = useSelector((state) => state.habitsReducer);
//   const dispatch = useDispatch();

//   const handleAddHabit = () => {
//     if (inputData.length === 0) {
//       return window.alert("Please Enter Your Habit");
//     }
//     dispatch(addHabit(inputData));
//     setInputData("");
//   };

//   return (
//     <div className={styles.container}>
//       <div className="bg-dark text-white p-3">
//         <h2 className="mb-0">My Habits Tracker</h2>
//         <p className="mb-0">Track your daily habits and reach your goals</p>
//       </div>
//       <div className={styles.todaysDate}>
//         <h2 className="text-primary mb-0">Today's Date</h2>
//         <p className="mb-0">{new Date().toLocaleDateString()}</p>
//       </div>
//       <div className={styles.addHabit}>
//         <input
//           type="text"
//           placeholder="Add a new habit"
//           value={inputData}
//           onChange={(event) => setInputData(event.target.value)}
//           required
//         />
//         <button className="btn btn-primary" onClick={handleAddHabit}>Add Habit</button>
//       </div>
//       <div className={styles.listHabit}>
//         {habits.list.map((habit) => (
//           <HabitCard habit={habit} key={habit.id} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../styles/home.module.css";
import { addHabit } from "../../action";
import HabitCard from "./HabitCard";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [inputData, setInputData] = useState("");

  const habits = useSelector((state) => state.habitsReducer);
  const dispatch = useDispatch();

  const handleAddHabit = () => {
    if (inputData.length === 0) {
      return window.alert("Please Enter Your Habit");
    }
    dispatch(addHabit(inputData));
    setInputData("");
  };

  return (
    <div className={styles.container}>
      <div className="bg-gradient-primary text-white p-3">
        <h2 className="mb-0">My Habits Tracker</h2>
        <p className="mb-0">Track your daily habits and reach your goals</p>
      </div>

      <div className={styles.addHabit}>
        <input
          type="text"
          placeholder="Add a new habit"
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
          required
          className="form-control"
        />
        <button className="btn btn-primary mt-3" onClick={handleAddHabit}>Add Habit</button>
      </div>
      <div className={styles.listHabit}>
        {habits.list.map((habit) => (
          <HabitCard habit={habit} key={habit.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;

