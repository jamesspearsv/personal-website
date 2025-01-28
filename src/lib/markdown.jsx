import ReactMarkdown from 'react-markdown';
import Error from '../components/Error';

export async function fetchMarkdownComponent(fileSource) {
  try {
    const res = await fetch('/posts/' + fileSource);

    if (res.headers.get('Content-Type') !== 'text/markdown') {
      return <Error to={'/blog'} />;
    } else {
      const text = await res.text();
      //  ignore post header
      const markdown = parseMarkdownHeader(text, 'body');
      return <ReactMarkdown>{markdown}</ReactMarkdown>;
    }
  } catch (error) {
    console.log(error);
  }
}

export function parseMarkdownHeader(markdown, select) {
  let index = null;
  if (select === 'header') index = 0;
  if (select === 'body') index = 1;

  // split header
  const content = markdown.split('---').filter((item) => item !== '');
  // select only metadata content and trim
  const selection = content[index];
  selection.trim();

  return selection;
}
