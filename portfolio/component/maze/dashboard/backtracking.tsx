import React, { useEffect } from 'react';

interface AdjacencyList {
  [key: number]: number[];
}

interface BacktrackingProps {
  onPathChange: (path: [number, number][]) => void;
}

const Backtracking: React.FC<BacktrackingProps> = ({ onPathChange }) => {
  const adjacencyList: AdjacencyList = {
    1: [2],
    2: [1, 3, 6],
    3: [4],
    4: [5],
    5: [4],
    6: [2, 7, 8],
    7: [6],
    8: [7],
  };

  const backtrack = (
    node: number,
    path: number[],
    visited: Record<number, boolean>
  ) => {
    visited[node] = true;
    path.push(node);

    console.log(`Visiting node ${node}, Current path: ${path}`);

    const tuplePath: [number, number][] = [];
    for (let i = 0; i < path.length - 1; i++) {
      tuplePath.push([path[i], path[i + 1]]);
    }

    console.log(`Found path: ${tuplePath}`);
    onPathChange(tuplePath); // Notify the parent component about the path change

    for (const neighbor of adjacencyList[node]) {
      if (!visited[neighbor] && path.indexOf(neighbor) === -1) {
        const newVisited = { ...visited }; // Create a new visited object for each recursive call
        backtrack(neighbor, path, newVisited);
      }
    }

    visited[node] = false;
    path.pop();
  };

  useEffect(() => {
    const startNode = 1;
    const visited: Record<number, boolean> = {};
    const path: number[] = [];

    backtrack(startNode, path, visited);

  }, [onPathChange]);

  // Instead of rendering the path, return it to the parent component
  return null;
};

export default Backtracking;
