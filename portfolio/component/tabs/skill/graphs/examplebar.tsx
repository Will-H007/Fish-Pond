import { useEffect, useRef } from "react";
import { Chart } from "chart.js";

interface ExampleProps {
  param: Promise<number | undefined>[];
}

function Example({ param: promises }: ExampleProps) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Wait for all promises to resolve
        const resolvedValues = await Promise.all(promises);

        const ctx = chartRef.current?.getContext("2d");

        if (ctx) {
          const xValues = Array.from({ length: resolvedValues.length }, (_, index) => index);


          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: xValues,
              datasets: [
                {
                  data: resolvedValues, // Use resolved values as count for the Accepted dataset
                  label: "Counts",
                  borderColor: "#3cba9f",
                  backgroundColor: "#71d1bd",
                  borderWidth: 2,
                }
              ]
            },
            options: {
              legend: {
                display: false, // Hide legend
              },
              scales: {
                xAxes: [{
                  stacked: true,
                  ticks: {
                    stepSize: 2, // Specify the step size for x-axis
                  },
                }],
                yAxes: [{
                  stacked: true,
                  ticks: {
                    beginAtZero: true,
                  },
                }],
              }
            },
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

  }, [promises]);

  return (
    <>
      {/* Stacked chart */}
      <canvas ref={chartRef}></canvas>
    </>
  );
}

export default Example;
