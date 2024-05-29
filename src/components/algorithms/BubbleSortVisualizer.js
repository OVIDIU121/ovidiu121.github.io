// SortingVisualizer.js

import React, { useState } from 'react';
import { Button, Card, Row, Col, CardText, CardTitle } from 'react-bootstrap';
import ArrayBars from './ArrayBars';
import BubbleSort from './BubbleSort';
import './SortingVisualizer.css';



const BubbleSortVisualizer = () => {
  const generateRandomArray = (size) => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
  };

  const [array, setArray] = useState(generateRandomArray(50)); // Initial array with 10 random elements
  const [sorting, setSorting] = useState(false); // Flag to indicate if sorting is in progress

  const startSorting = async () => {
    if (!sorting) {
      setSorting(true); // Start sorting
      await BubbleSort(array, setArray);
      setSorting(false); // Stop sorting
      setArray(generateRandomArray(60)); // Generate new random data
    }
  };

  return (
    <Row>
      <Col>
        <Card style={{ width: '900px', height: '700px' }} className="text-center mx-auto my-4">
          <Card.Header>
            <CardTitle>
            Bubble Sort Visualization
            </CardTitle>
            </Card.Header>
          <Card.Body>
            <ArrayBars array={array} />
          </Card.Body>
          <Card.Footer>
            <BubbleSort array={array} setArray={setArray} />
          </Card.Footer>
          <CardText>
            <br></br>
          Bubble sort is a simple sorting algorithm that repeatedly steps through the list, 
          compares adjacent elements, and swaps them if they are in the wrong order. 
          The pass through the list is repeated until the list is sorted. 
          This algorithm is named for the way smaller elements "bubble" to the top of the list with each pass.
          While easy to understand and implement, bubble sort is inefficient for large lists and generally 
          performs poorly compared to more advanced sorting algorithms.
          </CardText>
          <br></br>
        </Card>
      </Col>

    </Row>
  );
};

export default BubbleSortVisualizer;
