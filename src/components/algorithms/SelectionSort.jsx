// SelectionSort.js

import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './SortingVisualizer.css';

const SelectionSort = ({ array, setArray }) => {
  const [sorting, setSorting] = useState(false); // Flag to indicate if sorting is in progress
  const [sorted] = useState(false);
  
  const selectionSort = async () => {
    const n = array.length;
    let tempArray = [...array];

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (tempArray[j] < tempArray[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [tempArray[i], tempArray[minIndex]] = [tempArray[minIndex], tempArray[i]];
        setArray([...tempArray]);
        await new Promise((resolve) => setTimeout(resolve, 100)); // Delay for visualization
      }
    }
  };

  const startSorting = async () => {
    if (!sorting) {
      setSorting(true); // Start sorting
      await selectionSort();
      setSorting(false); // Stop sorting
    }
  };

  return (
<>
  <Button
    variant={sorted ? "success" : "primary"}
    className={`start-button me-3 ${sorted ? 'sorted' : ''}`}
    onClick={startSorting}
    disabled={sorting || sorted}
  >
    {sorting ? 'Sorting...' : sorted ? 'Data Sorted' : 'Start Selection Sort'}
  </Button>
</>

  );
};

export default SelectionSort;
