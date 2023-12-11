import { useEffect,useRef } from "react"
import { Chart } from "chart.js";
function Example3() {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        const ctx = chartRef.current?.getContext("2d");
        if (ctx) {
            new Chart(ctx, {
            type: 'doughnut',
            data: {
                // labels: ["Accepted", "Pending", "Rejected"],
                datasets: [{
                    data: [70, 10, 6],
                    borderColor: [
                        "rgb(75, 192, 192)",
                        "rgb(255, 205, 86)",
                        "rgb(255, 99, 132)",
                    ],
                    backgroundColor: [
                        "rgb(75, 192, 192 )",
                        "rgb(255, 205, 86)",
                        "rgb(255, 99, 132)",
                    ],
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        display: false,
                    }],
                    yAxes: [{
                        display: false,
                    }],
                }
            },

        });
    }
}, [])


    return (
        <>
      <canvas ref={chartRef} ></canvas>

        </>
    )
}

export default Example3;