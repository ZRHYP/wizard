function splitStringUsingRegex(inputString: string): string[] {
  const words: string[] = [];
  const regex = /\S+\s*/g; // Match non-whitespace sequences (words), including trailing spaces.

  let match;
  while ((match = regex.exec(inputString)) !== null) {
    words.push(match[0]);
  }

  return words;
}

export default splitStringUsingRegex;
