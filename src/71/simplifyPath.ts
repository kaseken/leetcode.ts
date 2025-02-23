type Dir = 'DirOrFileName' | 'CurrentDir' | 'ParentDir' | 'None';

const parseDir = (dir: string): Dir => {
  if (dir === '') return 'None';
  if (dir === '.') return 'CurrentDir';
  if (dir === '..') return 'ParentDir';
  return 'DirOrFileName';
};

export const simplifyPath = (path: string): string => {
  const stack: string[] = [];
  path.split('/').forEach((dir) => {
    const dirType = parseDir(dir);
    if (dirType === 'ParentDir') {
      stack.pop();
    } else if (dirType === 'DirOrFileName') {
      stack.push(dir);
    }
  });
  return '/' + stack.join('/');
};
