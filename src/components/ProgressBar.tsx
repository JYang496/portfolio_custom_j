import {useProgressBar} from "react-aria";

export const ProgressBar = (props:any) => {
    let {
        value,
        minValue = 0,
        maxValue = 100
    } = props;
    let {
        progressBarProps
    } = useProgressBar(props);

    // Calculate the width of the progress bar as a percentage
    let percentage = (value - minValue) / (maxValue - minValue);
    let barWidth = `${Math.round(percentage * 100)}%`;

    return (
        <div {...progressBarProps} style={{ width: "100%" }}>
            <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: barWidth}} />
            </div>
        </div>
    );
}
