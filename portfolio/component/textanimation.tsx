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
      fontSize: '40px',
      color: 'transparent',
      textTransform: 'uppercase',
      animation: 'flip 2s infinite',
      fontWeight:"bold"
    },
  };

  const getSpanStyles = (i: number): React.CSSProperties => ({
    ...styles.span,
    ['--i' as any]: i,
    color: '#FFD700',
    animationDelay: `${i * 0.1}s`, // Adjust the delay based on your preference
  });

  return (
    <div style={styles.body}>
      <div className="waviy" style={styles.waviy}>
        <span style={getSpanStyles(1)}>H</span>
        <span style={getSpanStyles(2)}>E</span>
        <span style={getSpanStyles(3)}>L</span>
        <span style={getSpanStyles(4)}>L</span>
        <span style={getSpanStyles(5)}>O</span>


      </div>
    </div>
  );
};

export default AnimatedTextComponent;
