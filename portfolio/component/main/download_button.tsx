import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {

    const fileUrl = '/resume.pdf';


    const link = document.createElement('a');


    link.href = fileUrl;


    link.download = 'resume.pdf';


    document.body.appendChild(link);


    link.click();

    document.body.removeChild(link);
  };

  return (
    <button
      style={{
        borderRadius: "10px",
        backgroundColor: "#4ea5b5",
        padding: "10px",
        marginTop: "10px",
        color: "black"
      }}
      onClick={handleDownload}
    >
      Download Resume
    </button>
  );
};

export default DownloadButton;
