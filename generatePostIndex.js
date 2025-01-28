// Script to generate index of markdown files in `/public/posts` at build time
import fs from 'fs';
import { parseMarkdownHeader } from './src/lib/markdown';

export function generatePostIndex() {
  const __assets = './src/assets';
  const __postdir = './public/posts';

  const index = [];
  try {
    console.log('Building blog posts index...');
    const posts = fs.readdirSync(__postdir);
    // console.log('posts -- ', posts);

    posts.forEach((post) => {
      // Skip non-markdown files.
      if (!post.match(/[A-Za-z0-9]+\.md/)) return;

      // read file contents
      const markdown = fs.readFileSync(__postdir + '/' + post, 'utf-8');

      const meta = parseMarkdownHeader(markdown, 'header');

      // split metadata rows on newlines
      const row = meta.split(/\n/).filter((item) => item !== '');
      // console.log(row);

      // assign post slug to entry object
      const entry = {
        slug: post.split('.')[0],
      };

      // extract row key and value
      row.forEach((element) => {
        const r = element.split(':');
        entry[r[0].trim()] = r[1].trim();
      });

      // console.log(entry);
      index.push(entry);
    });

    // sort according to date
    index.sort((a, b) => new Date(a.date) + new Date(b.date));

    // write index to json file
    fs.writeFileSync(__assets + '/postIndex.json', JSON.stringify(index));

    console.log('Done building blog posts index successfully!');
  } catch (error) {
    console.error(error);
  }
}
