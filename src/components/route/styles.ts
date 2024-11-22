import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    // root: {
    //   width: '80%',
    //   margin: '10% auto',
    // },
    switchContainer: {
      width: '100%',
    },
    nav: {
      display: 'block',
      border: 'thin solid #e3e3e3',
      paddingTop: 10,
      paddingBottom: 10,
    },
    menu: {
      width: '100%',
      display: 'block',
      position: 'relative',
      padding: 0,
      marginTop: 0,

      '& > li': {
        marginLeft: 20,
        float: 'left',
        listStyle: 'none',
      },
    },
  })
);

export default useStyles;