import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './SortingVisualizer.css';

const QuickSort = ({ array, setArray }) => {
  const [sorting, setSorting] = useState(false); // Flag to indicate if sorting is in progress
  const [sorted, setSorted] = useState(false);

  const quickSort = async (arr, left = 0, right = arr.length - 1) => {
    if (left >= right) return;
    const pivot = arr[right];
    let i = left;
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        await swapAndSetArray(arr, i, j, setArray);
        i++;
      }
    }
    await swapAndSetArray(arr, i, right, setArray);
    await quickSort(arr, left, i - 1);
    await quickSort(arr, i + 1, right);
  };

  const swapAndSetArray = async (arr, i, j, setArray) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, 10)); // Delay for visualization
  };

  const startSorting = async () => {
    if (!sorting) {
      setSorting(true); // Start sorting
      const tempArray = [...array];
      await quickSort(tempArray);
      setSorting(false); // Stop sorting
      setSorted(true); // Set sorted flag
    }
  };

  return (
    <Button
    variant={sorted ? "success" : "primary"}
    className={`start-button me-3 ${sorted ? 'sorted' : ''}`}
    onClick={startSorting}
    disabled={sorting || sorted}
  >
    {sorting ? 'Sorting...' : sorted ? 'Data Sorted' : 'Start Quick Sort'}
  </Button>
  );
};

export default QuickSort;
