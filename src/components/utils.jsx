import Showdown from 'showdown';

const converter = new Showdown.Converter();

export const convertMarkdown = (text) => {
  return {__html:converter.makeHtml(text)}
}