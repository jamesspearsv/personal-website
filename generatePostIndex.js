/**
 * Prebuild script to generate a list of markdown files
 * contained in `/public/posts` at build time.
 */

import fs from 'fs';
const __publicdir = './public';
const __postdir = './public/posts';

// todo: remove previous index file

const index = [];

try {
  const posts = fs.readdirSync(__postdir);
  console.log('posts -- ', posts);

  console.log('METADATA');
  posts.forEach((post) => {
    /* skip non-markdown files.
     * Improve this to handle complex file names
     * i.e 'post-file.md'
     */
    if (!post.match(/[A-Za-z0-9]+\.md/)) return;

    // read file contents
    const markdown = fs.readFileSync(__postdir + '/' + post, 'utf-8');

    // extract metadata header
    const content = markdown.split('---');
    const meta = content[1];
    meta.trim();
    console.log(meta);

    // split metadata rows
    const data = meta.split(/\n/).filter((item) => item != '');

    // assign post slug to entry object
    const entry = {
      slug: post.split('.')[0],
    };

    // extract row key and value
    data.forEach((element) => {
      const row = element.split(':');
      entry[row[0].trim()] = row[1].trim();
    });

    index.push(entry);
  });
} catch (error) {
  console.error(error);
}

console.log(index);

//todo: write file to `/public`
