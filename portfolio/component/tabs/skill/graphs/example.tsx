import Chart, { ChartData } from "chart.js";
import { useRef, useEffect, useState } from "react";

interface MyChartProps {
  chartData: number[];
}

const MyChart: React.FC<MyChartProps> = ({ chartData }) => {
  const formatData = (data: number[]): ChartData => ({
    labels: ["a", "b", "c", "d", "e", "f", "g", "h"],
    datasets: [{ data }]
  });

  const chartRef = useRef<Chart | null>(null);

  const canvasCallback = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: "radar",
        data: formatData(chartData),
        options: { responsive: true }
      });
    }
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.data = formatData(chartData);
      chartRef.current.update();
    }
  }, [chartData]);

  return (
    <div className="self-center w-1/2">
      <div className="overflow-hidden">
        <canvas ref={canvasCallback}></canvas>
      </div>
    </div>
  );
};

const ChartContainer: React.FC = () => {
  const [data, setData] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7]);

  const onClick = () => {
    setData((prevData) => prevData.slice(1).concat(10 * Math.random()));
  };

  return (
    <div style={{ display:"flex", alignItems:"center"}}>
      {/* <button onClick={onClick}>Change</button> */}
      <MyChart chartData={data} />
    </div>
  );
};

export default ChartContainer;
