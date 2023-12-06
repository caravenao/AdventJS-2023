function findNaughtyStep(original, modified) {
    let minLength = Math.min(original.length, modified.length);
    
    for (let i = 0; i < minLength; i++) {
      if (original[i] !== modified[i]) {
        if (original[i] === modified[i + 1]) {
          return modified[i];
        } else if (original[i + 1] === modified[i]) {
          return original[i];
        }
      }
    }
  
    if (original.length !== modified.length) {
      return original.length > modified.length ? original[minLength] : modified[minLength];
    }
  
    return '';
  }

  let original = 'abcd'
  let modified = 'abcde'
  findNaughtyStep(original, modified) // 'e'
  
  original = 'stepfor'
  modified = 'stepor'
  findNaughtyStep(original, modified) // 'f'
  
  original = 'abcde'
  modified = 'abcde'
  findNaughtyStep(original, modified) // ''
