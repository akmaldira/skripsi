const fs = require("fs");

const files = fs.readdirSync("./Hasil");

function serializeNumver(number) {
  const text = number.toString();
  return text.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const resourceUsageFiles = files
  .filter((f) => f.includes(".txt.csv"))
  .sort((a, b) => b - a);

if (fs.existsSync("./Hasil/resourceSummary.csv")) {
  fs.unlinkSync("./Hasil/resourceSummary.csv");
  fs.writeFileSync("./Hasil/resourceSummary.csv", "");
} else {
  fs.writeFileSync("./Hasil/resourceSummary.csv", "");
}

resourceUsageFiles.forEach((file) => {
  const data = fs.readFileSync(`./Hasil/${file}`, "utf8");
  const thread = file.split("-")[0];
  const rowReq = file.split("-")[1];
  const col = file.split("-")[2].split(".")[0] == "all" ? "All" : "Half";
  const testCase = `${thread} Thread ${rowReq} Row ${col}`;

  const row = data.split("\n");
  const memory = {
    express: {
      increment: 0,
      value: 0,
    },
    gin: {
      increment: 0,
      value: 0,
    },
    spring: {
      increment: 0,
      value: 0,
    },
  };

  const cpu = {
    express: {
      increment: 0,
      value: 0,
    },
    gin: {
      increment: 0,
      value: 0,
    },
    spring: {
      increment: 0,
      value: 0,
    },
  };

  for (let i = 0; i < row.length; i++) {
    const [
      n,
      c,
      name,
      cp,
      mu,
      mp,
      nio,
      bio,
      pid,
      mem_u,
      mem_l,
      mem_percentage,
      cpu_percentage,
    ] = row[i].split(",");
    if (mem_percentage === undefined) {
      continue;
    }
    if (name === "express-js") {
      memory.express.value += parseFloat(mem_percentage);
      memory.express.increment += 1;
      cpu.express.value += parseFloat(cpu_percentage);
      cpu.express.increment += 1;
    } else if (name === "gin-gonic") {
      memory.gin.value += parseFloat(mem_percentage);
      memory.gin.increment += 1;
      cpu.gin.value += parseFloat(cpu_percentage);
      cpu.gin.increment += 1;
    } else if (name === "spring-boot") {
      memory.spring.value += parseFloat(mem_percentage);
      memory.spring.increment += 1;
      cpu.spring.value += parseFloat(cpu_percentage);
      cpu.spring.increment += 1;
    }
  }

  memory.express = memory.express.value / memory.express.increment;
  memory.gin = memory.gin.value / memory.gin.increment;
  memory.spring = memory.spring.value / memory.spring.increment;

  cpu.express = cpu.express.value / cpu.express.increment;
  cpu.gin = cpu.gin.value / cpu.gin.increment;
  cpu.spring = cpu.spring.value / cpu.spring.increment;

  const oldFile = fs.readFileSync(`./Hasil/resourceSummary.csv`);

  fs.writeFileSync(
    `./Hasil/resourceSummary.csv`,
    `${oldFile}${testCase}
Framework, Memory (%), CPU (%)
Express Js, ${new Intl.NumberFormat().format(
      memory.express.toFixed(3)
    )}, ${new Intl.NumberFormat().format(cpu.express.toFixed(3))}
Gin Gonic, ${memory.gin.toFixed(3)}, ${cpu.gin.toFixed(3)}
Spring Boot, ${memory.spring.toFixed(3)}, ${cpu.spring.toFixed(3)}\n\n`
  );
});
