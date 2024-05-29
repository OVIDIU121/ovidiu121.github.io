// MergeSort.js

import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './SortingVisualizer.css';

const MergeSort = ({ array, setArray }) => {
  const [sorting, setSorting] = useState(false); // Flag to indicate if sorting is in progress
  const [sorted, setSorted] = useState(false);

  const mergeSort = async (arr) => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const leftArray = await mergeSort(arr.slice(0, mid));
    const rightArray = await mergeSort(arr.slice(mid));

    return await merge(leftArray, rightArray);
  };

  const merge = async (leftArray, rightArray) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      if (leftArray[leftIndex] < rightArray[rightIndex]) {
        result.push(leftArray[leftIndex]);
        leftIndex++;
      } else {
        result.push(rightArray[rightIndex]);
        rightIndex++;
      }
      setArray([...result, ...leftArray.slice(leftIndex), ...rightArray.slice(rightIndex)]);
      await new Promise((resolve) => setTimeout(resolve, 10)); // Delay for visualization
    }

    return result.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
  };

  const startSorting = async () => {
    if (!sorting) {
      setSorting(true); // Start sorting
      await mergeSort(array);
      setSorting(false); // Stop sorting
      setSorted(true); // Mark as sorted
    }
  };

  return (
    <Button
    variant={sorted ? "success" : "primary"}
    className={`start-button me-3 ${sorted ? 'sorted' : ''}`}
    onClick={startSorting}
    disabled={sorting || sorted}
  >
    {sorting ? 'Sorting...' : sorted ? 'Data Sorted' : 'Start Merge Sort'}
  </Button>
  );
};

export default MergeSort;
