/// <reference lib="webworker" />

addEventListener('message', async ({ data }) => {
  console.log('data :>> ', data);
  const root = await addChart();
  postMessage(root);
});

async function addChart() {
  // Chart code goes in here
  console.log('Processing worker ...');

  return new Promise((resolve) => {
    let result = 0;

    for (let i = 0; i < 1000000000; i++) {
      // Some complex computation
      result += Math.pow(i, 2) + Math.sqrt(i) * 3.14;
    }

    console.log('result :>> ', result);
    resolve(false);
  });
}

// if (typeof Worker !== 'undefined') {
//   // Create a new
//   const worker = new Worker(new URL('./graph.worker', import.meta.url));
//   worker.onmessage = ({ data }) => {
//     console.log(`page got message ${data}`);
//   };

//   worker.postMessage('hello');
// } else {
//   // Web Workers are not supported in this environment.
//   // You should add a fallback so that your program still executes correctly.
//   console.log('webworkers are not supported in this environment');
// }
