class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      let direction;
      value < this.value ? direction = 'left' : direction = 'right';
      this[direction] === null ? this[direction] = new BST(value) : this[direction].insert(value)
    }
  
    contains(value) {
      if (this.value === value) {
        return true;
      } else {
          let direction;
          value < this.value ? direction = 'left' : direction = 'right';
          if(this[direction] === null) {
            return false
          } else {
            return this[direction].contains(value)
          }
      }
    } 
  }