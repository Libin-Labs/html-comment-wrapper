export function wrapHtmlComment(value: string): string {
  if (typeof value !== 'string') throw new TypeError('Expected text');
  return '<!-- ' + value.replace(/-+/g, (run) => Array.from(run, () => '-').join(' ')) + ' -->';
}
