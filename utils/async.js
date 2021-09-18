export const forceWaitWithCondition = (condition, interval) => {
  while (!condition) {
    setTimeout(() => {
      startTime = Date.now();
    }, interval);
  }
};

export function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}
