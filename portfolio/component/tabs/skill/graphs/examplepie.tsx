import { useEffect,useRef } from "react"
import { Chart } from "chart.js";
function Example2() {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        const ctx = chartRef.current?.getContext("2d");
        if (ctx) {
            new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Accepted", "Pending", "Rejected"],
                datasets: [{
                    data: [70, 10, 6],
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
            {/* Pie chart */}
          
            <canvas ref={chartRef} style={{height:"80%", width:"80%"}}></canvas>
 
        </>
    )
}
export default Example2;