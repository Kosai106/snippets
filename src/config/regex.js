const Regex = {
  keyword: /(\"(.*)\"):/g,
  operator: /(\:|\,|\{|\}|\[|\])/g,
  string: /(\[([^\]]+)]|(\"(.*)\"(\,)?))/g,
  number: /((?!\S*\")\d+(\.\d+)?)/g,
  highlight: /(<em>(.*)<\/em>)/g,
  boolean: /(true|false)/g,
  operator: /(\:|\,|\{|\}|\[|\])/g,
  variable: /(null|undefined)/g,
}

export default Regex
