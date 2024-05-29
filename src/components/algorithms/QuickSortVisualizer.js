import React, { useState } from 'react';
import { Button, Card, Row, Col, CardText, CardTitle } from 'react-bootstrap';
import ArrayBars from './ArrayBars';
import QuickSort from './QuickSort'; // Import QuickSort component
import './SortingVisualizer.css';

const QuickSortVisualizer = () => {
  const generateRandomArray = (size) => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
  };

  const [array, setArray] = useState(generateRandomArray(50)); // Initial array with 50 random elements
  const [sorting, setSorting] = useState(false); // Flag to indicate if sorting is in progress

  const startSorting = async () => {
    if (!sorting) {
      setSorting(true); // Start sorting
      await QuickSort(array, setArray); // Call QuickSort function directly
      setSorting(false); // Stop sorting
      setArray(generateRandomArray(60)); // Generate new random data
    }
  };

  return (
    <Row>
      <Col>
        <Card style={{ width: '900px', height: '700px' }} className="text-center mx-auto my-4">
          <Card.Header>
            <CardTitle>QuickSort Visualization</CardTitle>
          </Card.Header>
          <Card.Body>
            <ArrayBars array={array} />
          </Card.Body>
          <Card.Footer>
            <QuickSort array={array} setArray={setArray} /> {/* Use QuickSort component */}
          </Card.Footer>
          <br />
          <CardText>
            Quicksort is a sorting algorithm that uses a divide-and-conquer strategy to sort elements efficiently.
            It selects a pivot element, rearranges the array so that all elements smaller than the pivot are on its left
            and all larger elements are on its right, then recursively sorts the subarrays.
            It has an average-case time complexity of O(n log n) and is known for its speed and simplicity.
          </CardText>
          <br />
        </Card>
      </Col>
    </Row>
  );
};

export default QuickSortVisualizer;
