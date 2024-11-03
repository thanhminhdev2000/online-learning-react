import { FlexEnd } from '@common/styled';
import { CModalProps } from '@common/type';
import { ModalWrapper } from '@components/layout/styled';
import { Close } from '@mui/icons-material';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const CConfirmModal = ({ title = 'Xác nhận', open, onSubmit, onClose, children, content }: CModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalWrapper>
        <Stack justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{title}</Typography>
          <Close onClick={onClose} sx={{ cursor: 'pointer' }} />
        </Stack>

        <Stack flexDirection="column" gap={2} marginY={2}>
          {content || children}
        </Stack>

        <FlexEnd marginTop={4} gap={2}>
          {onClose && <Button onClick={onClose}>Huỷ bỏ</Button>}
          {onSubmit && (
            <Button variant="contained" type="submit" onClick={onSubmit}>
              Xác nhận
            </Button>
          )}
        </FlexEnd>
      </ModalWrapper>
    </Modal>
  );
};

export default CConfirmModal;
