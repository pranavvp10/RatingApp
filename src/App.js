import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Panel from './components/Panel';
import TitleBar from './components/TitleBar';
import CardGroup from 'react-bootstrap/CardGroup';
import LeaderBoard from './components/LeaderBoard';


export class App extends Component {
    constructor(props){
        super(props);
        this.state={ra:1200,rb:1200 }
        this.f1=this.f1.bind(this)
        this.f2=this.f2.bind(this)
    }
    prob(r1,r2){
        return (1.0 *1.0/(1+1.0*Math.pow(10,1.0*(r1-r2)/400)))
    }
    
    pb=()=>{return this.prob(this.state.ra,this.state.rb) }
    pa=()=>{return this.prob(this.state.rb,this.state.ra)}
    
    f1(){
        
        this.setState(state=>({
                ra:state.ra+30*(1-this.pa()),
                rb:state.rb+30*(0-this.pb())
           }));

    }
    f2(){
        this.setState(state=>({
                ra:state.ra+30*(0-this.pa()),
                rb:state.rb+30*(1-this.pb())
           }));

    }

    lb(){
       let myR={
           'Ronaldo':this.state.ra.toFixed(2),
           'Messi':this.state.rb.toFixed(2)
       };
       let sortable =[];
       for(let rating in myR){
           sortable.push([rating,myR[rating]])
       }
       sortable=sortable.sort(function(a,b){
        return a[1]-b[1];
       });
       let objSorted = {}
        sortable.forEach(function(item){
            objSorted[item[0]]=item[1]
        })

        return(sortable);

    }
    render() {
        let res=this.lb();
        const mystyle={backgroundImage:"url('https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/0bd0ac63801835.5abcadbf4c764.png')"}
        return (
            <Container style={mystyle}>
                <TitleBar/>
                <CardGroup className='p-3'>
                    <Panel player='Ronaldo'  imgsrc="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/ronaldo-pillo-wsoisi.jpg" parentMethod={this.f1} />
                    <br/>
                    <Panel player='Messi' imgsrc="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/6-lionel-messi-artwork-taoteching-art.jpg"  parentMethod={this.f2} />
                </CardGroup>
                <LeaderBoard sorarr={res} />
            </Container>
        )
    }
}

export default App
