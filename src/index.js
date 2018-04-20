import Regex from './config/Regex'
import data from './config/data'

const content = JSON.stringify(data, null, 2)

const codes = content
  .replace(Regex.number, '<span data-highlight-number>$1</span>')
  .replace(Regex.keyword, '<span data-highlight-string>$1</span>:')
  .replace(Regex.string, '<span data-highlight-keyword>$1</span>')
  .replace(
    Regex.highlight,
    '<span data-highlight-match>&lt;em&gt;$1&lt;/em&gt;</span>'
  )
  .replace(Regex.boolean, '<span data-highlight-boolean>$1</span>')
  .replace(Regex.operator, '<span data-highlight-comment>$1</span>')
  .replace(Regex.variable, '<span data-highlight-variable>$1</span>')

document.getElementById('data').innerHTML = codes
