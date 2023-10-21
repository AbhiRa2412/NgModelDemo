import { Component, ElementRef, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import $ from 'jquery';

@Component({
  selector: 'app-pie-chart-demo',
  templateUrl: './pie-chart-demo.component.html',
  styleUrls: ['./pie-chart-demo.component.scss']
})
export class PieChartDemoComponent implements OnInit {

  constructor(private elm:ElementRef) { }

  ngOnInit(){
    let piechart =  echarts.init($(this.elm.nativeElement).find('#piechart')[0]);
    piechart.setOption({
      backgroundColor: '#FFFFFF',

    title: {
        text: 'Pie Chart',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: [{
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    }],
    series : [
        {
            name:'Web Series',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'13 Reasons Y'},
                {value:310, name:'Wirl'},
                {value:274, name:'Sunnyzao'},
                {value:235, name:'Oremo'},
                {value:400, name:'Bolesho'}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
        }
    ]
    })
  }

}
