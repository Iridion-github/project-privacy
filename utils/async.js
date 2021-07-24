export const forceWaitWithCondition = (condition, interval) => {
  while (!condition) {
    setTimeout(() => {
      startTime = Date.now();
    }, interval);    
  }
} 

export const forceWait = (ms) => {
  let start = Date.now();
  const end = start + ms;
  let now = Date.now();
  while (now < end) {
    now = Date.now();
  }
} 
