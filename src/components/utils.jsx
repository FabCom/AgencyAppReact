import Showdown from 'showdown';

const converter = new Showdown.Converter();

export const convertMarkdown = (text) => {
  return {__html:converter.makeHtml(text)}
}

export function capitalize(str) {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}
