import React, { useState, useEffect } from "react";

interface ProgressBarProps {
  data?: number; // Single value representing progress (0 to 100)
}

const defaultProgress = 50; // Default progress value if data prop is not provided

const ProgressBar: React.FC<ProgressBarProps> = ({ data = defaultProgress }) => {
  const [progress, setProgress] = useState<number>(data);

  useEffect(() => {
    setProgress(data);
  }, [data]);

  return (




    <div
      style={{
  
        borderRadius:"5%",
        height: '10px',
        width:"100px",
        backgroundColor: '#CBD5E0',
       margin:"5px"
      }}
    >
          <div
            style={{
              borderTopLeftRadius:"5%",
              borderBottomLeftRadius:"5%",
              height: '100%',
              backgroundColor: '#3B82F6',
              width: `${progress}%`, // Dynamic width based on the progress value
            }}
          ></div>

      </div>

  );
};

export default ProgressBar;
