import React, { useState } from 'react';
import {  Card, Row, Col, CardText, CardTitle } from 'react-bootstrap';
import ArrayBars from './ArrayBars';
import SelectionSort from './SelectionSort';
import './SortingVisualizer.css';

const SelectionSortVisualizer = () => {
  const generateRandomArray = (size) => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
  };

  const [array, setArray] = useState(generateRandomArray(50)); // Initial array with 10 random elements
  const [sorting, setSorting] = useState(false); // Flag to indicate if sorting is in progress

  const startSorting = async () => {
    if (!sorting) {
      setSorting(true); // Start sorting
      await SelectionSort(array, setArray);
      setSorting(false); // Stop sorting
      setArray(generateRandomArray(60)); // Generate new random data
    }
  };

  return (
    <Row>
      <Col>
        <Card className="text-center mx-auto my-4">
          <Card.Header>
            <CardTitle>
              Selection Sort Visualization
            </CardTitle>
          </Card.Header>
          <Card.Body>
            <ArrayBars array={array} />
          </Card.Body>
          <Card.Footer>
            <SelectionSort array={array} setArray={setArray} />
          </Card.Footer>
          <CardText>
            Selection sort is a simple comparison-based sorting algorithm that works by repeatedly selecting
            the minimum element from the unsorted portion of the array and placing it at the beginning.
            The algorithm maintains two subarrays within the main array: the sorted subarray at the beginning
            and the unsorted subarray at the end. In each iteration, selection sort finds the minimum element
            from the unsorted subarray and swaps it with the first element of the unsorted subarray,
            effectively expanding the sorted subarray. This process continues until the entire array is sorted.
            Selection sort has a time complexity of O(n^2) in all cases, making it inefficient for large
            datasets but suitable for small lists or when auxiliary space is limited.
          </CardText>
        </Card>
      </Col>
    </Row>
  );
};

export default SelectionSortVisualizer;
