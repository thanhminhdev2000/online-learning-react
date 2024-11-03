import { CModalProps } from '@common/type';
import CConfirmModal from '@components/cConfirmModal';
import { Typography } from '@mui/material';

const PaymentModal = ({ open, onClose }: CModalProps) => {
  return (
    <CConfirmModal title="Chuyển khoản" open={open} onClose={onClose}>
      <img src="/payment_qr.jpg" />
      Nội dung chuyển khoản:
      <Typography fontWeight="bold">Tên khoá học - Email đăng nhập</Typography>
      <Typography color="textSecondary">
        Ví dụ: Giải đề thi THPT Quốc gia bằng máy tính Casio - nguyenvana@gmail.com
      </Typography>
      <Typography fontWeight="bold">Khoá học sẽ được kích hoạt trong vòng 24h kể từ khi chuyển khoản.</Typography>
    </CConfirmModal>
  );
};

export default PaymentModal;
