import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default class ExampleTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['', 'Head1', 'Head2', 'Head3','Header4'],
      // tableTitle: ['','좋음', '보통', '나쁨', '매우나쁨'],
      tableData: [
        ['','좋음','보통','나쁨','매우나쁨'],
        ['통합지수','Row21','Row22','Row23','Row24',],
        ['미세먼지','Row21','Row22','Row23','Row24',],
        ['초미세먼지','Row21','Row22','Row23','Row24',],
        ['오존','Row21','Row22','Row23','Row24',],
        ['이산화질소','Row21','Row22','Row23','Row24',],
        ['일산화탄소','Row21','Row22','Row23','Row24',],
        ['아황산가스','Row21','Row22','Row23','Row24',],
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1}}>
          <Row data={state.tableHead} flexArr={[1,1,1,1,1,1,1,1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
            <Rows data={state.tableData} flexArr={[1,1,1,1,1,1,1,1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  head: {  height: 72,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 40  },
  text: { textAlign: 'center' }
});