// AnimatedTextComponent.tsx

import React from 'react';

interface AnimatedTextStyles {
  [key: string]: React.CSSProperties;
}

const AnimatedTextComponent: React.FC = () => {
  const styles: AnimatedTextStyles = {
    body: {
      backgroundColor: 'transparent',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      position: 'relative',
      marginTop:"2em"
    },
    waviy: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
      textAlign: 'center',
    },
    span: {
      display: 'inline-block',
      fontSize: '50px',
      color: 'transparent',
      textTransform: 'uppercase',
      animation: 'flip 4s infinite',
      fontWeight:"bold"
    },
  };

  const getSpanStyles = (i: number): React.CSSProperties => ({
    ...styles.span,
    ['--i' as any]: i,
    color: '#FFD700',
    animationDelay: `${i*0.3 }s`, // Adjust the delay based on your preference
    fontSize:"1em",
    marginRight:"3em",

  });

  return (
    <div style={styles.body}>
      <div className="waviy" style={styles.waviy}>

        <span style={getSpanStyles(1)}>如</span>
        <span style={getSpanStyles(2)}>魚</span>
        <span style={getSpanStyles(3)}>得</span>
        <span style={getSpanStyles(4)}>水</span>
      </div>
    </div>
  );
};

export default AnimatedTextComponent;
