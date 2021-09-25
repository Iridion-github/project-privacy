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

export async function awaitCondition(condition, ms = 333, callback) {
  while (!condition) {
    await delay(ms);
    if (callback) {
      await callback();
    } else {
      console.log("looping...");
    }
  }
}
