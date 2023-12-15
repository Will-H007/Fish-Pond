import { useEffect, useRef } from "react";
import { Chart } from "chart.js";

function Example2({ counts }: { counts: number[] }) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");

    if (ctx) {
      // Process the counts to create bins
      const bins = Array.from({ length: Math.ceil(Math.max(...counts) / 10) }, (_, index) => index * 10);
      const binCounts = Array(bins.length).fill(0);

      counts.forEach((count) => {
        const binIndex = Math.floor(count / 10);
        binCounts[binIndex]++;
      });

      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: bins.map((bin, index) => `${bin}-${bin + 10}`),
          datasets: [{
            data: binCounts,
            borderColor: [
              "#3cba9f",
              "#ffa500",
              "#c45850",
            ],
            backgroundColor: [
              "rgb(60,186,159,0.1)",
              "rgb(255,165,0,0.1)",
              "rgb(196,88,80,0.1)",
            ],
            borderWidth: 2,
          }],
        },
        options: {
          scales: {
            xAxes: [{
              display: false,
            }],
            yAxes: [{
              display: false,
            }],
          },
        },
      });
    }
  }, [counts]);

  return (
    <>
      {/* Pie chart */}
      <canvas ref={chartRef} style={{ height: "80%", width: "80%" }}></canvas>
    </>
  );
}

export default Example2;
