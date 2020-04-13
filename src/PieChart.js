import React, { Component } from 'react';
import Chart from 'react-google-charts';
import axios from 'axios';

class PieChart extends Component {
  state = {
    data: [],
    loading: false,
  };

  getAll = async () => {
    this.setState({ loading: true });

    const res = await axios.get('https://corona.lmao.ninja/all');

    this.setState({ data: res.data, loading: false });
  };

  async componentDidMount() {
    this.getAll();
  }

  render() {
    return (
      <div>
        <Chart
          width={'500px'}
          height={'300px'}
          chartType='PieChart'
          loader={<div>Loading Chart</div>}
          data={[
            ['', ''],
            ['Deaths', this.state.data.deaths],
            ['Recovered', this.state.data.recovered],
            ['Active', this.state.data.active],
          ]}
          options={{
            title: 'Data in Percentage',
          }}
        />
      </div>
    );
  }
}

export default PieChart;
