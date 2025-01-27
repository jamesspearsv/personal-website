import { fetchMarkdownComponent } from '@lib/markdown';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Blog() {
  const [content, setContent] = useState(null);
  const { postName } = useParams();

  useEffect(() => {
    if (!postName) return;

    (async () => {
      try {
        const markdown = await fetchMarkdownComponent(postName + '.md');
        setContent(markdown);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [postName]);

  if (!postName) {
    return <h1>Blog</h1>;
  } else {
    return <div>{content}</div>;
  }
}
