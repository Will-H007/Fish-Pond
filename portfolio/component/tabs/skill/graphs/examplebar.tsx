import { useEffect,useRef } from "react"
import { Chart } from "chart.js";
function Example() {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        const ctx = chartRef.current?.getContext("2d");
        if (ctx) {
            new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [{
                    data: [70, 90, 44, 60, 83, 90, 100],
                    label: "Accepted",
                    borderColor: "#3cba9f",
                    backgroundColor: "#71d1bd",
                    borderWidth: 2,
                }, {
                    data: [10, 21, 60, 44, 17, 21, 17],
                    label: "Pending",
                    borderColor: "#ffa500",
                    backgroundColor: "#ffa500",
                    borderWidth: 2
                }, {
                    data: [6, 3, 2, 2, 7, 0, 16],
                    label: "Rejected",
                    borderColor: "#c45850",
                    backgroundColor: "#c45850",
                    borderWidth: 2
                }
                ]
            },
            options: {
                scales: {
                    xAxes: [{
                        stacked: true
                    }],
                    yAxes: [{
                        stacked: true
                    }],
                }
            },
        });
    }
}, [])


    return (
        <>
            {/* Stacked chart */}
            
                    <canvas ref={chartRef} ></canvas>
  
        </>
    )
}

export default Example;