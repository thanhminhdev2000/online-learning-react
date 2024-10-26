import { HEADER_HEIGHT } from '@common/constant';
import { Paper, styled, TableContainer, TableRow } from '@mui/material';

export const TableRowStyled = styled(TableRow)(() => ({
  '&:hover': {
    backgroundColor: '#f5f5f5',
    cursor: 'pointer',
  },
}));

export const TableContainerStyled = styled(TableContainer)(({ theme }) => ({
  border: '1px solid #ccc',
  marginTop: theme.spacing(4),
}));

export const PaperStyled = styled(Paper)(({ theme }) => ({
  minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
  padding: theme.spacing(4),
}));
