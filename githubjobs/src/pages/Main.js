import React, {useState, useEffect}from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Widgets from '@material-ui/icons/Widgets';
import { ColumnToRow, Row, Item } from '@mui-treasury/components/flex';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import TextField from '@material-ui/core/TextField';
import DataTable from '../components/DataTable'


import { usePlainNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/plain';
import Landing from "./Landing"

const useStyles = makeStyles(({ typography, palette, breakpoints }) => ({
  legalLink: {
    ...typography.caption,
    justifyContent: 'center',
    color:
      palette.type === 'dark'
        ? 'rgba(255,255,255,0.57)'
        : palette.text.secondary,
    position: 'relative',
    [breakpoints.up('sm')]: {
      '&:not(:first-of-type)': {
        '&:before': {
          content: '"|"',
          display: 'block',
          position: 'absolute',
          left: 0,
        },
      },
    },
  },
  newsletter: {
    fontSize: typography.caption.fontSize,
  },
  navMenu: {
    flexWrap: 'wrap',
  }
}));

export const Main = React.memo(function NeptuneAppFooter() {
  const classes = useStyles();
  const [search, setSearch] = useState('')
  useEffect(() => {
// componentDidMount();
},[]);

const onSubmitForm = (event) => {
    event.preventDefault();
    const { search } = event.target;
    setSearch(
    search.value);
    console.log(search.value)
  };



  function componentDidMount() {
    let api_url = 'https://jobs.github.com/positions.json';
// Now, use JavaScript's native Fetch API to get
// users list from Github API
fetch('https://cors-anywhere.herokuapp.com/' + api_url)
.then(res => {
    // Unfortunately, fetch doesn't send (404 error) into the cache itself
    // You have to send it, as I have done below
    if(res.status >= 400) {
        throw new Error("Server responds with error!");
    }
    return res.json();
})
.then(users => {
    console.log(users)
 
},
// Note: it's important to handle errors here 
// instead of a catch() block so that we don't swallow
// exceptions from actual bugs in components
err => {

}
);
}
  return (
    <Box bgcolor={'background.paper'} width={'100%'}>
      <Container>
        <Box pt={8} pb={2}>
          <Row wrap>
            <Item grow={2}>
              <Row alignItems={'center'}>
                <Item color={'#007bff'} fontSize={64} lineHeight={0}>
                  <Widgets fontSize={'inherit'} color={'inherit'} />
                </Item>
                <Item>
                  <Typography variant={'h6'} color={'textSecondary'}>
                 Github Jobs
                  </Typography>
                </Item>
              </Row>
              {/* <NavMenu className={classes.navMenu}>
                <NavItem>About</NavItem>
                <NavItem>Careers</NavItem>
                <NavItem>Press</NavItem>
                <NavItem>Customer Care</NavItem>
                <NavItem>Services</NavItem>
              </NavMenu> */}
            </Item>
          </Row>
          <form
                inputClearedAfterSubmit
                onSubmit={(e)=> onSubmitForm(e)}

              >
                <input
                  id={'searchField'}
                  type = "text"
                  name= "search"
                  placeholder="search jobs"
               

                />
                <input type="submit"/>
              </form>
        </Box>
<DataTable/>
        <Divider />
        <Box pt={2} pb={10}>
          <ColumnToRow
            at={'md'}
            columnStyle={{ alignItems: 'center' }}
            rowStyle={{ alignItems: 'unset' }}
          >
            <Item grow ml={-2} shrink={0}>
              <NavMenu useStyles={usePlainNavigationMenuStyles}>
                <ColumnToRow at={'sm'}>
                  <NavItem className={cx(classes.legalLink)}>
                    Terms & Conditions
                  </NavItem>
                  <NavItem className={cx(classes.legalLink)}>
                    Privacy Policy
                  </NavItem>
                  <NavItem className={cx(classes.legalLink)}>
                    Accessibility
                  </NavItem>
                  <NavItem className={cx(classes.legalLink)}>Legal</NavItem>
                </ColumnToRow>
              </NavMenu>
            </Item>
            <Item>
              <Box py={1} textAlign={{ xs: 'center', md: 'right' }}>
                <Typography
                  component={'p'}
                  variant={'caption'}
                  color={'textSecondary'}
                >
                 By Caleb Welch © 2020 All right reserved
                </Typography>
              </Box>
            </Item>
          </ColumnToRow>
        </Box>
      </Container>
    </Box>
  );
});
export default Main;