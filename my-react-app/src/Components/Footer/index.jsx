import { createStyles } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  footer: {
    textAlign: 'right',
    width: '80%',
    margin: 'auto',
  }
}));


function Footer() {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      &copy;Abdullah Aljoulani 
    </footer>
  )
}

export default Footer;