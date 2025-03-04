import Styles from "@/styles/dashboard/timeTracking.module.css";
const renderCustomPieChartLegend = (props:any) => {
    const COLORS = ["#88d8b0", "#6c7ae0", "#a4c4e6", "#adb5bd"]; // Custom colors
    const { payload } = props;
    return (
      <ul className={Styles.renderPieChartUl}>
        {payload.map((entry:any, index:any) => (
          <li
            key={`item-${index}`}
            className={Styles.renderPieChartLI}
          >
            <span
              style={{
                display: "inline-block",
                width: "12px",
                height: "12px",
                backgroundColor: COLORS[index % COLORS.length],
                borderRadius: "50%",
                marginRight: "8px",
              }}
            ></span>
            <span>{entry.value}</span> <span>{entry.payload.value}</span>
          </li>
        ))}
      </ul>
    );
  };

  export default renderCustomPieChartLegend;
