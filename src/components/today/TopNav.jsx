
// import React from 'react' ; 
// import { Link } from 'react-router-dom';
// import styles from '../../styles/topnav.module.css' ; 

// const TopNav = () => {
//   const d = new Date();
//   const d1 = d.toDateString() ; 


//   return (
//     <div className={styles.topnav}>   
//         <div className={styles.navLeft}>
//           <div className={styles.navLeftElem}>
//             <Link className={styles.decorationLogo} to='/'> HABIT TRACKER </Link>
//           </div>

//           <div className={styles.navLeftElem}>
//             <Link className={styles.decoration} to='/'> HOME  </Link>
//           </div>

//           <div className={styles.navLeftElem}>
//             <Link className={styles.decoration} to='/weekly'> WEEKLY </Link>
//           </div>
//         </div>

//         <div className={styles.navRightElem}>
//           {`${d1}`}
//         </div>
//     </div>
//   )
// }

// export default TopNav ; 

// import React from 'react';
// import { Link } from 'react-router-dom';
// import styles from '../../styles/topnav.module.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const TopNav = () => {
//   const d = new Date();
//   const d1 = d.toDateString();

//   return (
//     <div className={styles.topnav}>
//       <div className={styles.navLeft}>
//         <div className={styles.navLeftElem}>
//           <Link className={styles.decorationLogo} to='/'>
//             <i className="fas fa-leaf"></i> HABIT TRACKER
//           </Link>
//         </div>

//         <div className={styles.navLeftElem}>
//           <Link className={styles.decoration} to='/'>
//             <i className="fas fa-home"></i> HOME
//           </Link>
//         </div>

//         <div className={styles.navLeftElem}>
//           <Link className={styles.decoration} to='/weekly'>
//             <i className="far fa-calendar-alt"></i> WEEKLY
//           </Link>
//         </div>
//       </div>

//       <div className={styles.navRightElem}>
//         <i className="far fa-clock"></i> {`${d1}`}
//       </div>
//     </div>
//   );
// };

// export default TopNav;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import styles from '../../styles/topnav.module.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const TopNav = () => {
//   const d = new Date();
//   const d1 = d.toDateString();

//   return (
//     <div className={styles.topnav}>
//       <div className={styles.navLeft}>
//         <div className={styles.navLeftElem}>
//           <Link className={styles.decorationLogo} to='/'>
//             <i className="fas fa-leaf"></i> HABIT TRACKER
//           </Link>
//           <p className="mb-0">Track your daily habits and reach your goals</p>
//         </div>

//         <div className={styles.navLeftElem}>
//           <Link className={styles.decoration} to='/'>
//             <i className="fas fa-home"></i> HOME
//           </Link>
//         </div>

//         <div className={styles.navLeftElem}>
//           <Link className={styles.decoration} to='/weekly'>
//             <i className="far fa-calendar-alt"></i> WEEKLY
//           </Link>
//         </div>
//       </div>

//       <div className={styles.navRightElem}>
//         <i className="far fa-clock"></i> {`${d1}`}
//       </div>
//     </div>
//   );
// };

// export default TopNav;

import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/topnav.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const TopNav = () => {
  const d = new Date();
  const d1 = d.toDateString();

  return (
    <div>
      <div className={styles.topnav}>
        <div className={styles.navLeft}>
          <div className={styles.navLeftElem}>
            <Link className={styles.decorationLogo} to='/'>
              <i className="fas fa-leaf"></i> HABIT TRACKER
            </Link>
          </div>

          <div className={styles.navLeftElem}>
            <Link className={styles.decoration} to='/'>
              <i className="fas fa-home"></i> HOME
            </Link>
          </div>

          <div className={styles.navLeftElem}>
            <Link className={styles.decoration} to='/weekly'>
              <i className="far fa-calendar-alt"></i> WEEKLY
            </Link>
          </div>
        </div>

        <div className={styles.navRightElem}>
          <i className="far fa-clock"></i> {`${d1}`}
        </div>
      </div>


    </div>
  );
};

export default TopNav;
