import { Table, TableContainer, TableHead, TableRow, TableCell, makeStyles, withStyles, TableBody, TablePagination  } from "@material-ui/core";
import { Today } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { ListData } from "../data/constants";

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  
  const useStyles = makeStyles({
    table: {
      minWidth: 375,
      textAlign: 'left',
    },
  });

export default function TableIndex(){
    const classes = useStyles();

    const rows = useSelector(state => state.novels)
    console.log("rows",rows)

    return<>
        <TableContainer>
          <Table className={classes.table} aria-label="customized table">
              <TableBody>
              {rows.map((row) => (
                  <StyledTableRow  className="tbRow">
                  <StyledTableCell component="th" scope="row" className="tbName tbnone">
                      {row.tag}
                  </StyledTableCell>
                  <StyledTableCell className='rowUpdate' align="left"><a href="#" className="tbNameT">{row.nameTruyen}</a></StyledTableCell>
                  <StyledTableCell className='rowUpdate' align="left"><a href="#"className="tbChapT">{row.chap}</a></StyledTableCell>
                  <StyledTableCell className='rowUpdate tbnone' align="left">{row.author}</StyledTableCell>
                  <StyledTableCell className='rowUpdate tbnone' align="left">{row.converter}</StyledTableCell>
                  <StyledTableCell className='rowUpdate tbnone' align="left">{row.date}</StyledTableCell>
                  </StyledTableRow>
              ))}
              </TableBody>
          </Table>
        </TableContainer>

    </>
}