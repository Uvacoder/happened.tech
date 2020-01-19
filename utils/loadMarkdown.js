import matter from 'gray-matter'

export const loadMarkdown = context => {
  const keys = context.keys()
  const values = keys.map(context)
  const data = keys.map((key, index) => {
    const slug = key
      .replace(/^.*[\\\/]/, '')
      .split('.')
      .slice(0, -1)
      .join('.')
    const value = values[index]
    const document = matter(value.default)
    return {
      document,
      slug,
    }
  })

  return data
}
