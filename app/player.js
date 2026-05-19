import { useVideoPlayer, VideoView } from 'expo-video';
import { StyleSheet, View } from 'react-native';
import Decorator from './decorator';

export default class PlayerDecorator extends Decorator {
    getCode(){
        let msg = global.videos[global.videos.length-1].uri;
        const player = useVideoPlayer(Array.isArray(msg) ? msg[0] : msg, player => {
            player.loop = true;
            player.play();
        });
    
        const styles = StyleSheet.create({
            contentContainer: {
                flex: 1,
                padding: 10,
            },
            video: {
                width: "100%",
                height: 350,
            },
            controlsContainer: {
                padding: 10,
            },
        });
        return (
            <View style={styles.contentContainer}>
              <VideoView
                style={styles.video}
                player={player}
                fullscreenOptions={{ enable: true }}
                allowsPictureInPicture
              />
            </View>
        )
    }; 
}