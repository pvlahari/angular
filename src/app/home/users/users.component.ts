import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  chart;
  chart2 = [];
  data1 = [];
  list: any;
  name: any[] = [];

  constructor(private home: HomeService) { }

  userslist() {
    this.home.userslist().subscribe(data => {
      for (let i = 0; i <= data.length; i++) {
        this.list = data;
      }
      this.list.forEach((tag, i) => {
        this.name.push(this.list[i].username);
      });
    });
  }

  ngOnInit() {

    this.userslist();

    // this.home.userslist().subscribe((res) => {
    //   this.data1 = res;
    //   // this.updateChartData(this.chart, res, 0);
    //   // this.updateChartData(this.doughnut, res.slice(0, 5), 0);
    // })

    // this.home.userslist().subscribe((res) => {
    //   this.chart2 = res;
    //   //this.updateChartData(this.chart, res, 1);
    // })

    this.chart = new Chart('bar', {
      type: 'bar',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Combo Bar and line Chart'
        },
      },
      data: {
        labels: this.name,
        //labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        datasets: [
          {
            type: 'bar',
            label: 'My First dataset',
            data: [1, 12, 3, 44, 5, 6, 17, 8, 9],
            backgroundColor: 'rgba(255,0,255,0.4)',
            borderColor: 'rgba(255,0,255,0.4)',
            fill: false,
          },
          {
            type: 'bar',
            label: 'My Second dataset',
            data: [1, 22, 13, 4, 5, 6, 7, 28, 9].reverse(),
            backgroundColor: 'rgba(0,0,255,0.4)',
            borderColor: 'rgba(0,0,255,0.4)',
            fill: false,
          }
        ]
      }
    });

    let options = {
      tooltips: false,

      elements: {
        point: {
          borderWidth: function (context) {
            return Math.min(Math.max(1, context.datasetIndex + 1), 8);
          },
          hoverBackgroundColor: 'transparent',
          hoverBorderColor: function (context) {
            return "red";
          },
          hoverBorderWidth: function (context) {
            var value = context.dataset.data[context.dataIndex];
            return Math.round(8 * value.v / 1000);
          },
          radius: function (context) {
            var value = context.dataset.data[context.dataIndex];
            var size = context.chart.width;
            var base = Math.abs(value.v) / 1000;
            return (size / 24) * base;
          }
        }
      }
    };

    // addData(chart, label, data) {
    //   chart.data.labels.push(label);
    //   chart.data.datasets.forEach((dataset) => {
    //     dataset.data.push(data);
    //   });
    //   chart.update();
    // }

    // removeData(chart) {
    //   chart.data.labels.pop();
    //   chart.data.datasets.forEach((dataset) => {
    //     dataset.data.pop();
    //   });
    //   chart.update();
    // }

    // updateChartData(chart, data, dataSetIndex) {
    //   chart.data.datasets[dataSetIndex].data = data;
    //   chart.update();
    // }
  }
}

