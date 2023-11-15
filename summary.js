const fs = require("fs");

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const files = fs.readdirSync("./Hasil");

const summaryFiles = files
  .filter((f) => !f.includes(".") && f.includes("_"))
  .map((file) => `Hasil/${file}/statistics.json`);

const summary = {};

if (fs.existsSync("./Hasil/summary.csv")) {
  fs.unlinkSync("./Hasil/summary.csv");
  fs.writeFileSync("./Hasil/summary.csv", "");
} else {
  fs.writeFileSync("./Hasil/summary.csv", "");
}

summaryFiles.forEach((file) => {
  const data = JSON.parse(fs.readFileSync(file));
  const testCase = file
    .split("/")[1]
    .split("_")
    .map((f) => {
      const text = capitalize(f);
      return text.replace("row", " Row").replace("thread", " Thread");
    })
    .join(" ");

  const expressResult = data["Express Js"];
  const ginResult = data["Gin Gonic"];
  const springResult = data["Spring Boot"];

  const express = {
    "Avg (ms)": expressResult.meanResTime,
    "Min (ms)": expressResult.minResTime,
    "Max (ms)": expressResult.maxResTime,
    "Req/s": expressResult.throughput,
    "Error (%)": expressResult.errorPct,
  };

  const gin = {
    "Avg (ms)": ginResult.meanResTime,
    "Min (ms)": ginResult.minResTime,
    "Max (ms)": ginResult.maxResTime,
    "Req/s": ginResult.throughput,
    "Error (%)": ginResult.errorPct,
  };

  const spring = {
    "Avg (ms)": springResult.meanResTime,
    "Min (ms)": springResult.minResTime,
    "Max (ms)": springResult.maxResTime,
    "Req/s": springResult.throughput,
    "Error (%)": springResult.errorPct,
  };

  let oldFile = fs.readFileSync(`./Hasil/summary.csv`);

  fs.writeFileSync(
    `./Hasil/summary.csv`,
    `${oldFile}${testCase}
Framework, Avg (ms), Min (ms), Max (ms), Req/s, Error (%)
Express Js, ${express["Avg (ms)"]}, ${express["Min (ms)"]}, ${express["Max (ms)"]}, ${express["Req/s"]}, ${express["Error (%)"]}
Gin Gonic, ${gin["Avg (ms)"]}, ${gin["Min (ms)"]}, ${gin["Max (ms)"]}, ${gin["Req/s"]}, ${gin["Error (%)"]}
Spring Boot, ${spring["Avg (ms)"]}, ${spring["Min (ms)"]}, ${spring["Max (ms)"]}, ${spring["Req/s"]}, ${spring["Error (%)"]}\n\n`
  );

  summary[testCase] = {
    "Express Js": express,
    "Gin Gonic": gin,
    "Spring Boot": spring,
  };
});
