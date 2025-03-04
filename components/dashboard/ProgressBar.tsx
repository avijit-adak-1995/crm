import React from 'react'

const ProgressBar = ({height ,marginTop,backgroundColor,progressColor,progressData,width,position}:any) => {
  return (
    <div
                    className="progress"
                    style={{
                      width,
                      position,
                      zIndex: "1",
                      height,
                      marginTop,
                      backgroundColor,
                    }}
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        height,
                        width: progressData,
                        backgroundColor: progressColor,
                      }}
                      // aria-valuenow="90"
                      // aria-valuemin="0"
                      // aria-valuemax="100"
                      aria-valuenow={90}
  aria-valuemin={0}
  aria-valuemax={100}
                    ></div>
                  </div>
  )
}

export default ProgressBar