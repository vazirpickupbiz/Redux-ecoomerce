// const originalArray = [
//     { id: 1 },
//     { id: 2 },
//     { id: 1 },
//     { id: 3 },
//     { id: 1 }
//   ];
  
//   const duplicateArray = originalArray.filter((obj, index, array) =>
//     array.some((innerObj, innerIndex) => innerIndex !== index && innerObj.id === obj.id)
//   );
  
const originalArray = [
    { id: 1 },
    { id: 2 },
    { id: 1 },
    { id: 3 },
    { id: 1 }
  ];
  
  const countMap = {};
  originalArray.forEach(obj => {
    const id = obj.id;
    countMap[id] = (countMap[id] || 0) + 1;
  });
  
  console.log(countMap);

//   const originalArray = [2, 3, 4, 5, 6, 6, 7, 8];
// const duplicateArray = originalArray.filter((value, index, array) => array.indexOf(value) !== index);
  