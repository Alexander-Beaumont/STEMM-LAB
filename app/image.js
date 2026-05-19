import { Image } from 'expo-image';
import Decorator from './decorator';



export default class ImageDecorator extends Decorator {
    constructor(img) {
        super()
        this.placeholderImage = img;
    }
    getCode(){
        return (
            <Image source={this.placeholderImage} style={{width:"100%",height:"250"}}/>
        )
    }; 
}