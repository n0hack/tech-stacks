import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

type Props = {};

export default function Comp({}: Props) {
  const [showing, setShowing] = useState(false);

  const toggleShowing = () => {
    setShowing((prev) => !prev);
  };

  const variants = {
    start: { opacity: 0, scale: 0 },
    end: { opacity: 1, scale: 1, rotateZ: 360 },
    exit: { opacity: 0, scale: 0, y: 20 },
  };

  return (
    <>
      <button onClick={toggleShowing}>Click</button>
      <AnimatePresence>
        {showing ? (
          <Box variants={variants} initial="start" animate="end" exit="exit" />
        ) : null}
      </AnimatePresence>
    </>
  );
}
