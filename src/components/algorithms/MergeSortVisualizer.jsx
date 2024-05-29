// SortingVisualizer.js

import React, { useState } from 'react';
import {  Card, Row, Col, CardText, CardTitle } from 'react-bootstrap';
import ArrayBars from './ArrayBars';
import MergeSort from './MergeSort';
import './SortingVisualizer.css';



const MergeSortVisualizer = () => {
  const generateRandomArray = (size) => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
  };

  const [array, setArray] = useState(generateRandomArray(50)); // Initial array with 10 random elements

  return (
    <Row>
      <Col>
        <Card style={{ width: '900px', height: '700px' }} className="text-center mx-auto my-4">
          <Card.Header>
            <CardTitle>
            Merge Sort Visualization
            </CardTitle>
            </Card.Header>
          <Card.Body>
            <ArrayBars array={array} />
          </Card.Body>
          <Card.Footer>
            <MergeSort array={array} setArray={setArray} />
          </Card.Footer>
          <CardText>
            <br></br>
            Merge sort is a divide-and-conquer algorithm that recursively divides the input array into 
            smaller subarrays until each subarray contains only one element. It then merges adjacent 
            subarrays in a sorted order until the entire array is sorted. Merge sort is known for its stability 
            and consistent performance, with a time complexity of O(n log n) in all cases. It works by dividing 
            the array into halves, sorting each half recursively, and then merging the sorted halves back together.
             This algorithm is efficient for sorting large datasets and is widely used in practice.
          </CardText>
          <br></br>
        </Card>
      </Col>

    </Row>
  );
};

export default MergeSortVisualizer;
