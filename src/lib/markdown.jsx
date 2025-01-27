import ReactMarkdown from 'react-markdown';
import Error from '../components/Error';

export async function fetchMarkdownComponent(fileSource) {
  const res = await fetch('/posts/' + fileSource);

  if (res.headers.get('Content-Type') !== 'text/markdown') {
    return <Error to={'/blog'} />;
  } else {
    // todo: handle file metadata
    const text = await res.text();
    return <ReactMarkdown>{text}</ReactMarkdown>;
  }
}
