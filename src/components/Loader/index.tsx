import { ItemCenter } from '@common/styled';
import { CircularProgress } from '@mui/material';

const Loader = ({ isFullScreen = true, size = 40 }: { isFullScreen?: boolean; size?: number }) => {
  if (isFullScreen) {
    return (
      <ItemCenter
        sx={{
          height: '100vh',
          width: '100%',
        }}
      >
        <CircularProgress size={size} />
      </ItemCenter>
    );
  }

  return <CircularProgress size={size} />;
};

export default Loader;