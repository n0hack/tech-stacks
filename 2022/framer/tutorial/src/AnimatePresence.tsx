import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100px;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

type Props = {};

export default function Comp({}: Props) {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);

  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };

  const variants = {
    entry: (isBack: boolean) => ({
      x: isBack ? -500 : 500,
      opacity: 0,
      scale: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: (isBack: boolean) => ({
      x: isBack ? 500 : -500,
      opacity: 0,
      scale: 0,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter custom={back}>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((값) =>
          값 === visible ? (
            <Box
              custom={back}
              variants={variants}
              initial="entry"
              animate="center"
              exit="exit"
              key={visible}
            >
              {visible}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <div style={{ display: 'flex' }}>
        <button onClick={prevPlease}>prev</button>
        <button onClick={nextPlease}>next</button>
      </div>
    </>
  );
}

/* export default function Comp({}: Props) {
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
} */
