const childProcess = require('child_process');
const chalk = require('chalk');

module.exports = (cmd, args, msg, color) => {
  const name = `${cmd} ${args.join(' ')}`;
  const normal = chalk[color || 'yellow'];
  const bold = normal.bold.underline;
  console.log(normal(`Running "${name}" and waiting for "${msg}"`));
  return new Promise((resolve, reject) => {
    const child = childProcess.spawn(cmd, args, { encoding: 'utf8', detached: true });

    child.stdout.on('data', (buffer) => {
      const data = buffer.toString('utf8');
      console.log(normal(data));
      if (msg && data.indexOf(msg) > -1) {
        console.log(bold(`Found "${msg}" for "${name}", resolving`));
        resolve(child);
      }
    });

    child.stderr.on('data', (data) => {
      console.log(normal(`${data}`));
    });

    child.on('close', (code) => {
      console.log(normal(`"${name}" finished with exit code ${code}`));
      if (code) {
        reject();
      } else {
        resolve(child);
      }
    });

    child.on('error', (err) => {
      console.log(bold(`Failed to start ${name}`));
      console.log(bold(err));
      reject(err);
    });
  });
};
