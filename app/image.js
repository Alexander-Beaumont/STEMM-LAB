import { Image } from 'react-native';
import Decorator from './decorator';



export default class ImageDecorator extends Decorator {
    constructor(img) {
        super()
        this.placeholderImage = img;
    }
    getCode(){
        return (
            <Image source={this.placeholderImage} style={{width:"100%",height:"250",resizeMode: 'stretch',}}/>
        )
    }; 
}