import { BrowserPod } from '@leaningtech/browserpod'

// Initialize the Pod
// VITE_BP_APIKEY is an environmental variable containing your Api Key
// Its value is defined in the file `.env` in the project's main directory
// To get an Api Key, visit https://console.browserpod.io

// Create a Terminal
const pod = await BrowserPod.boot({apiKey:import.meta.env.VITE_BP_APIKEY});
const terminal = await pod.createDefaultTerminal(document.querySelector("#console"));
await pod.run("bash", [], {terminal:terminal});



// const f = await pod.createFile("/yarn", "binary");
// const resp = await fetch("/yarn");           // served from public/
// const f = await pod.createFile("/yarn-bin", "binary");
// const resp = await fetch("/yarn-bin");           // served from public/
// await f.write(await resp.arrayBuffer());
// await f.close();

// Run it
// await pod.run("/yarn", [], { terminal });


// Run Node's REPL