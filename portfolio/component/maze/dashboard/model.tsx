import React, { useEffect, useState } from 'react';

interface AdjacencyList {
  [key: number]: number[];
}

const adjacencyList: AdjacencyList = {
  1: [2],
  2: [3, 6],
  3: [4],
  4: [5],
  5: [2],
  6: [7],
  7: [8],
  8: [],
};

interface DepthFirstTraversalProps {
  onPathChange: (path: [number, number][]) => void;
}

const DepthFirstTraversal: React.FC<DepthFirstTraversalProps> = ({ onPathChange }) => {
  const [path, setPath] = useState<number[]>([]);

  const dfs = (node: number, visited: Record<number, boolean>, currentPath: number[]) => {
    visited[node] = true;
    currentPath.push(node);

    if (node === 8) {
      setPath([...currentPath]);
      const tuplePath: [number, number][] = [];
      for (let i = 0; i < currentPath.length - 1; i++) {
        tuplePath.push([currentPath[i], currentPath[i + 1]]);
      }
      onPathChange(tuplePath); // Notify the parent component about the path change
      return;
    }

    for (const neighbor of adjacencyList[node]) {
      if (!visited[neighbor]) {
        dfs(neighbor, visited, [...currentPath]);
      }
    }
  };

  useEffect(() => {
    const startNode = 1;
    const visited: Record<number, boolean> = {};
    const path: number[] = [];

    const dfs = (node: number) => {
      visited[node] = true;
      path.push(node);

      if (node === 8) {
        const tuplePath: [number, number][] = [];
        for (let i = 0; i < path.length - 1; i++) {
          tuplePath.push([path[i], path[i + 1]]);
        }
        onPathChange(tuplePath);
        return;
      }

      for (const neighbor of adjacencyList[node]) {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      }
    };

    dfs(startNode);
  }, [onPathChange]);

  // Instead of rendering the path, return it to the parent component
  return null;
};

export default DepthFirstTraversal;
