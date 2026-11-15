import { countWords } from './words.ts';

/** Splits `text` into lines of at most `width` characters, breaking between words. */
function wrap(text: string, width: number): string[] {
  const lines: string[] = [];
  let line = '';
  for (const word of text.split(/\s+/)) {
    if (line !== '' && line.length + 1 + word.length > width) {
      lines.push(line);
      line = word;
    } else {
      line = line === '' ? word : `${line} ${word}`;
    }
  }
  if (line !== '') lines.push(line);
  return lines;
}

/** A summary of `text`: how many words it has. */
export function summarize(text: string): string {
  return `${countWords(text)} words`;
}

/** The summary of `text`, wrapped to lines of at most `width` characters. */
export function report(text: string, width: number): string[] {
  return wrap(summarize(text), width);
}
