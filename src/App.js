import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root : { // root 는 전체 설정 
    width : '100%',
    //marginTop : theme.spacing.unit * 3,
    overflowX : "auto"
  },
  table : { // 테이블이 전체에서 최소 1090 가진다
    minwidth : 1080
  }
})

class App extends Component {
  state = {
    customers: ""
  }
  // compodidmount 모든 컴포먼트가 마운트가 되었을 때 사용되는 부분
  componentDidMount() {
      this.callApi()
      .then(res => this.setState({customers:res}))
      .catch(err => console.log(err));

  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  //기본적으로 변경되지 않는 정보는 props 로 변경되는 정보는 state를 사용
  render(){
    const {classes} = this.props ;
    return (
      <Paper className={classes.root}>
        <Table className = {classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              this.state.customers ? this.state.customers.map(c => {
                return (
                  
                  <Customer 
                  //map 함수 사용시 반드시 key 값을 지정해주어야한다.
                    key = {c.id}
                    id = {c.id}
                    image = {c.image}
                    name = {c.name}
                    birthday = {c.birthday}
                    gender = {c.gender}
                    job = {c.job}
                  />
                )
              }) : ""
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}



export default withStyles(styles)(App);