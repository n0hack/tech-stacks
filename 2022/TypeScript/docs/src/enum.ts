enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key];
  if (num <= LogLevel.WARN) {
    console.log('Log level key is:', key);
    console.log('Log level num is:', num);
    console.log('Log level message is:', message);
  }
}
printImportant('ERROR', 'This is a message');
