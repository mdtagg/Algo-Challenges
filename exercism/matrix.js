class Matrix {
    constructor(matrixInfo) {
      this.dimensionInfo = 
      matrixInfo
      .split('\n')
      .map(set => {
        return set.split(' ').map(item => {
            return parseInt(item)
        })
      })
    }
  
    get rows() {
        return this.dimensionInfo.map(set => {
            return set
        })
    }
  
    get columns() {
      let columns = [
        [],
        [],
        []
      ]
      this.dimensionInfo.forEach(row => {
        return row.forEach((number,index) => {
            return columns[index].push(number)
        })
      })
      return columns
    }
  }

  const myMatrix = new Matrix('1 2\n3 4')
  console.log(myMatrix.rows)
  console.log(myMatrix.columns)