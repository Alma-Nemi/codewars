const fs = require('fs');
const { Octokit } = require('@octokit/rest');

// 1. Получаем результаты тестов
async function getTestResults() {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  
  const runs = await octokit.actions.listWorkflowRuns({
    owner: 'Alma-Nemi',
    repo: 'codewars-js-solutions',
    workflow_id: 'test-codewars.yml',
    per_page: 1
  });

  return runs.data.workflow_runs[0].conclusion === 'success';
}

// 2. Обновляем README
function updateReadme(success) {
  const readmePath = './README.md';
  let content = fs.readFileSync(readmePath, 'utf8');
  
  const newStatus = success ? '✅' : '❌';
  content = content.replace(/\| (.*?) \| (\d+ kyu) \| (.*?) \|/g, (match, task, level, oldStatus) => {
    return `| ${task} | ${level} | ${newStatus} |`;
  });

  fs.writeFileSync(readmePath, content);
}

// 3. Главная функция
(async () => {
  const isSuccess = await getTestResults();
  updateReadme(isSuccess);
})();