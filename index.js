const { execSync } = require("child_process");
const fs = require("fs");

var args = process.argv.slice(2);
var thread = args.find((arg) => arg.startsWith("--thread="))?.split("=")[1];
var rampUp = 1;
var row = args.find((arg) => arg.startsWith("--row="))?.split("=")[1];
var col = args.find((arg) => arg.startsWith("--col="))?.split("=")[1];
var mode = args.find((arg) => arg.startsWith("--mode="))?.split("=")[1];
var host = args.find((arg) => arg.startsWith("--host="))?.split("=")[1];

if (!thread) {
  throw new Error("Please specify thread");
}

if (!row) {
  throw new Error("Please specify row");
}

if (!col) {
  throw new Error("Please specify col");
}

host = "localhost";

const jmx = fs.readFileSync("LoadTest.jmx", "utf8");

const newJmx = jmx
  .replace(
    /<stringProp name="HTTPSampler.domain">.*<\/stringProp>/g,
    `<stringProp name="HTTPSampler.domain">${host}</stringProp>`
  )
  .replace(
    /<stringProp name="ThreadGroup.num_threads">.*<\/stringProp>/g,
    `<stringProp name="ThreadGroup.num_threads">${thread}</stringProp>`
  )
  .replace(
    /<stringProp name="ThreadGroup.ramp_time">.*<\/stringProp>/g,
    `<stringProp name="ThreadGroup.ramp_time">${rampUp}</stringProp>`
  )
  .replace(
    /<stringProp name="HTTPSampler.path">.*<\/stringProp>/g,
    `<stringProp name="HTTPSampler.path">employee/${col}?row=${row}</stringProp>`
  );

fs.writeFileSync("LoadTest.jmx", newJmx);

const resultPath = `../../Hasil/${thread}thread_${row}row_${col}_${mode}`;
const csvPath = `${resultPath}/result.csv`;

console.log(`Running with ${thread} thread(s) and ${row} row(s)`);

execSync(
  `cd apache-jmeter-5.6.2/bin && jmeter -n -t ../../LoadTest.jmx -l ${csvPath} -e -o ${resultPath}`,
  { stdio: "inherit" }
);
