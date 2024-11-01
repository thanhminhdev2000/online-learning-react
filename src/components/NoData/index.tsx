import { ItemCenter } from '@common/styled';

const NoDataAvailable = ({ length }: { length: number }) => {
  return (
    <>
      {length === 0 && (
        <ItemCenter sx={{ width: '100%', height: 200, backgroundColor: 'white' }}>Không tìm thấy dữ liệu</ItemCenter>
      )}
    </>
  );
};

export default NoDataAvailable;
