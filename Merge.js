function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    
    const mid = Math.floor(arr.length / 2); //Mitad del Arreglo
    const left = arr.slice(0, mid);         // Arreglo de la izquierda
    const right = arr.slice(mid);           // Arreglo de la derecha
    
    return merge(mergeSort(left), mergeSort(right));  // Se hace la mezcla de los dos arreglos.
  }
  
  function merge(left, right) {
    let resultArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {   // Se recorre los indices de los array izq y der
        if (left[leftIndex] < right[rightIndex]) {        // Se compara el valor de cada uno y se toma el menor
          resultArr.push(left[leftIndex]);                // Se agrega el valor menor al nuevo arreglo
          leftIndex++;
        } else {
          resultArr.push(right[rightIndex]);
          rightIndex++;                                  
        }
      }
      
      return resultArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));  // Se concatena los valores para el nuevo arreglo
  }

  console.log(mergeSort([23,89,1,100,115,25,3]))