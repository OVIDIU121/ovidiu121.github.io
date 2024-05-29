// BubbleSort.js

import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './SortingVisualizer.css';

const BubbleSort = ({ array, setArray }) => {
  const [sorting, setSorting] = useState(false); // Flag to indicate if sorting is in progress
  const [sorted, setSorted] = useState(false);

  const bubbleSort = async () => {
    const n = array.length;
    let tempArray = [...array];
    let sorted = false;
    while (!sorted) {
      sorted = true;
      setSorted(true);
      for (let i = 0; i < n - 1; i++) {
        if (tempArray[i] > tempArray[i + 1]) {
          await swapAndSetArray(tempArray, i, i + 1, setArray);
          sorted = false;
        }
      }
    }
  };

  const swapAndSetArray = async (arr, i, j, setArray) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, 10)); // Delay for visualization
  };

  const startSorting = async () => {
    if (!sorting) {
      setSorting(true); // Start sorting
      await bubbleSort();
      setSorting(false); // Stop sorting
    }
  };

  return (
    <Button
    variant={sorted ? "success" : "primary"}
    className={`start-button me-3 ${sorted ? 'sorted' : ''}`}
    onClick={startSorting}
    disabled={sorting || sorted}
  >
    {sorting ? 'Sorting...' : sorted ? 'Data Sorted' : 'Start Bubble Sort'}
  </Button>
  );
};

export default BubbleSort;
