import { Tooltip, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { ReactNode, useEffect, useRef, useState } from 'react';

const COverflowTooltip = ({ children, variant }: { children: ReactNode; variant?: Variant }) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const { current } = textRef;
    if (current) {
      setIsOverflowing(current.scrollWidth > current.clientWidth);
    }
  }, [children]);

  return (
    <Tooltip title={isOverflowing ? children : ''} arrow>
      <Typography
        variant={variant}
        ref={textRef}
        noWrap
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {children}
      </Typography>
    </Tooltip>
  );
};

export default COverflowTooltip;
