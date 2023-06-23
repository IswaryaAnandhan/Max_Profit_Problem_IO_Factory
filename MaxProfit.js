function maxProfit(timeUnit) {
  const earnings = [1500, 1000, 3000];
  const buildingTimes = [5, 4, 10]; 

  let maxProfit = 0;
  let solution = '';

  for (let theatres = 0; theatres * buildingTimes[0] <= timeUnit; theatres++) {
    for (let pubs = 0; pubs * buildingTimes[1] <= timeUnit; pubs++) {
      const remainingTime = timeUnit - (theatres * buildingTimes[0] + pubs * buildingTimes[1]);
      if (remainingTime % buildingTimes[2] === 0) {
        const commercialParks = remainingTime / buildingTimes[2];
        const profit = theatres * earnings[0] + pubs * earnings[1] + commercialParks * earnings[2];
        if (profit > maxProfit) {
          maxProfit = profit;
          solution = `T: ${theatres} P: ${pubs} C: ${commercialParks}`;
        }
      }
    }
  }

  return solution;
}

// Test Cases
console.log(maxProfit(8));
console.log(maxProfit(13)); 
console.log(maxProfit(9)); 
