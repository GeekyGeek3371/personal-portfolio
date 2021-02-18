import React from 'react'
import '../styles/work.css';
import Card from './cardd';
import Im from '../assets/experience.jpg'

class Work extends React.Component{
    render(){
        return(
            <div class="exp">
                <Card val="Project description:-Segmentation of surgical tools in laparoscopic surgery to
improve vision of surgeon. The technical stack include knowledge of web
development using html css js flask to build the product. Extensive Machine learning
and Deep learning knowledge was required for developing this project such as using
Mask-RCNN for finding the masks, KALDI for speech-to-text feature. Along with this
we required openCV techniques for performing image processing techniques such as
histogram equalization." hd="SURGICAL IMAGE ENHANCEMENT AND TOOL
SEGMENTATION(SIETS)" im={Im}/>
                <Card val="A financial management Web Application. Learnt full stack web
development using HTML,CSS,JS,PHP and MYSQL via this project. CRUD operations
allowed." hd="JEB KHARCH - An Expense tracking app" im={Im}/>
                <Card val="This is a qr scanner app designed using react native and expo
APIs Learnt react navigation, Expo camera library, native-base for building UI" hd="QR CODE SCANNER USING REACT NATIVE" im={Im}/>
                <Card val="Shows stock prices vs days curve, suggests whether to buy or
sell stocks based on Moving average, bollinger band and stock volumes, Stock price
prediction using sentiment analysis (LSTM model). HTML, CSS, JS, Jquery, Python" hd="STOCK MARKET ANALYSIS AND PREDICTION THROUGH
SENTIMENT ANALYSIS" im={Im}/>
            </div>
        )
    }
} 
export default Work;