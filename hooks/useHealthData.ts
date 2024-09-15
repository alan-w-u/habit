// import AppleHealthKit, {
//   HealthInputOptions,
//   HealthKitPermissions,
//   HealthUnit,
// } from "react-native-health";
// import { useState, useEffect} from 'react';

// const { Permissions } = AppleHealthKit.Constants;

// const permissions: HealthKitPermissions = {
//   permissions: {
//     read: [
//       Permissions.Steps,
//       Permissions.FlightsClimbed,
//       Permissions.DistanceWalkingRunning,
//     ],
//     write: [],
//   },
// };

// const [steps, setSteps] = useState(0);
// const [flights, setFlights] = useState(0);
// const [distance, setDistance] = useState(0);

// const useHealthData = (date: Date) => {
//   // const [steps, setSteps] = useState(0);
//   // const [flights, setFlights] = useState(0);
//   // const [distance, setDistance] = useState(0);

//   const [hasPermissions, setHasPermission] = useState(false);

//   useEffect(() => {
//     AppleHealthKit.initHealthKit(permissions, (err) => {
//       if (err) {
//         console.log('Error getting permissions');
//         return;
//       }
//       setHasPermission(true);
//     });
//   }, []);

//   return { steps, flights, distance };
// };

// export default useHealthData;
