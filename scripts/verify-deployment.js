#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

console.log("🔍 Verifying Deployment Readiness...\n");

const checks = [];

// Check 1: Verify video files exist
const videoFiles = [
  "public/videos/blackhole.webm",
  "public/videos/skills-bg.webm",
  "public/videos/encryption-bg.webm",
];

videoFiles.forEach((file) => {
  const filePath = path.join(__dirname, "..", file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    const sizeInMB = stats.size / (1024 * 1024);
    if (sizeInMB > 25) {
      checks.push({
        name: `Video file size: ${file}`,
        status: "WARNING",
        message: `File is ${sizeInMB.toFixed(2)}MB (>25MB Vercel limit)`,
      });
    } else {
      checks.push({
        name: `Video file: ${file}`,
        status: "PASS",
        message: `Found (${sizeInMB.toFixed(2)}MB)`,
      });
    }
  } else {
    checks.push({
      name: `Video file: ${file}`,
      status: "FAIL",
      message: "File not found",
    });
  }
});

// Check 2: Verify image files exist
const imageFiles = [
  "public/Luffy.jpeg",
  "public/spiderman.png",
  "public/lock-top.png",
  "public/lock-main.png",
];

imageFiles.forEach((file) => {
  const filePath = path.join(__dirname, "..", file);
  if (fs.existsSync(filePath)) {
    checks.push({
      name: `Image file: ${file}`,
      status: "PASS",
      message: "Found",
    });
  } else {
    checks.push({
      name: `Image file: ${file}`,
      status: "FAIL",
      message: "File not found",
    });
  }
});

// Check 3: Verify project images exist
const projectImages = [
  "public/projects/Attack.jpg",
  "public/projects/Exploitation.svg",
  "public/projects/Network-monitoring.svg",
];

projectImages.forEach((file) => {
  const filePath = path.join(__dirname, "..", file);
  if (fs.existsSync(filePath)) {
    checks.push({
      name: `Project image: ${file}`,
      status: "PASS",
      message: "Found",
    });
  } else {
    checks.push({
      name: `Project image: ${file}`,
      status: "FAIL",
      message: "File not found",
    });
  }
});

// Check 4: Verify build directory exists
const buildDir = path.join(__dirname, "..", ".next");
if (fs.existsSync(buildDir)) {
  checks.push({
    name: "Build directory",
    status: "PASS",
    message: ".next directory exists",
  });
} else {
  checks.push({
    name: "Build directory",
    status: "FAIL",
    message: "Run npm run build first",
  });
}

// Check 5: Verify essential configuration files
const configFiles = [
  "next.config.js",
  "tailwind.config.ts",
  "postcss.config.js",
  "vercel.json",
  "middleware.ts",
];

configFiles.forEach((file) => {
  const filePath = path.join(__dirname, "..", file);
  if (fs.existsSync(filePath)) {
    checks.push({
      name: `Config file: ${file}`,
      status: "PASS",
      message: "Found",
    });
  } else {
    checks.push({
      name: `Config file: ${file}`,
      status: "WARNING",
      message: "File not found (may be optional)",
    });
  }
});

// Check 6: Verify environment variables (if needed)
const requiredEnvVars = [
  // Add any required environment variables here
  // 'RESEND_API_KEY'
];

requiredEnvVars.forEach((envVar) => {
  if (process.env[envVar]) {
    checks.push({
      name: `Environment variable: ${envVar}`,
      status: "PASS",
      message: "Set",
    });
  } else {
    checks.push({
      name: `Environment variable: ${envVar}`,
      status: "WARNING",
      message: "Not set (may be required for full functionality)",
    });
  }
});

// Check 7: Verify package.json scripts
const packageJsonPath = path.join(__dirname, "..", "package.json");
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  const requiredScripts = ["dev", "build", "start", "lint"];

  requiredScripts.forEach((script) => {
    if (packageJson.scripts && packageJson.scripts[script]) {
      checks.push({
        name: `Package script: ${script}`,
        status: "PASS",
        message: "Defined",
      });
    } else {
      checks.push({
        name: `Package script: ${script}`,
        status: "FAIL",
        message: "Script not found",
      });
    }
  });
}

// Display results
console.log("📋 Deployment Verification Results:\n");

let passCount = 0;
let failCount = 0;
let warningCount = 0;

checks.forEach((check) => {
  const statusIcon = {
    PASS: "✅",
    FAIL: "❌",
    WARNING: "⚠️",
  }[check.status];

  console.log(`${statusIcon} ${check.name}: ${check.message}`);

  if (check.status === "PASS") passCount++;
  else if (check.status === "FAIL") failCount++;
  else if (check.status === "WARNING") warningCount++;
});

console.log("\n📊 Summary:");
console.log(`✅ Passed: ${passCount}`);
console.log(`❌ Failed: ${failCount}`);
console.log(`⚠️  Warnings: ${warningCount}`);

if (failCount === 0) {
  console.log("\n🎉 Deployment verification completed successfully!");
  console.log("Your project is ready for Vercel deployment.");

  console.log("\n🚀 Next steps:");
  console.log(
    '1. Commit your changes: git add . && git commit -m "Fix deployment issues"',
  );
  console.log("2. Push to your repository: git push origin main");
  console.log(
    "3. Deploy to Vercel from: https://github.com/subrat243/portfolio",
  );
  console.log("4. Verify the live deployment matches local development");
} else {
  console.log("\n⚠️  Please fix the failed checks before deploying.");
  process.exit(1);
}

if (warningCount > 0) {
  console.log("\n💡 Consider addressing the warnings for optimal deployment.");
}

console.log(
  "\n📖 For detailed deployment information, see DEPLOYMENT_FIXES.md",
);
console.log("🔗 Repository: https://github.com/subrat243/portfolio");
