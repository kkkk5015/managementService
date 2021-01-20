import React from 'react' ;
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'



class Customer extends React.Component {
    // 랜더는 항상 실행되는 부분
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt = 'profile'/></TableCell>
                <TableCell>{this.props.name}</TableCell>                    
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
            
        )
    }
}
/*
// 사용자의 id값 image를 랜더링하는 부분
class CustomerProfile extends React.Component {
    render() {
      return (
        //alt =  이미지 설명
        <div> 
          <img src={this.props.image} alt = "profile"/> 
          <h2>{this.props.name}({this.props.id})</h2>
        </div>
      );
    }
  }
  
  // 사용자의 남은 데이터를 출력
  class Customerinfo extends React.Component {
    render() {
      return (
        <div> 
            <p>{this.props.birthday} </p>
            <p>{this.props.gender}</p>
            <p> {this.props.job}</p>
        </div>
        
      );
    }
  }*/

export default Customer;