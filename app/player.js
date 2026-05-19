import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { Button, StyleSheet, View } from 'react-native';

export default class Player {
    getCode(){
        let msg = 'https://ia800506.us.archive.org/5/items/Trees_201811/Trees.mp4';
        const player = useVideoPlayer(Array.isArray(msg) ? msg[0] : msg, player => {
            player.loop = true;
            player.play();
        });
    
        const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });
        const styles = StyleSheet.create({
            contentContainer: {
                flex: 1,
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 50,
            },
            video: {
                width: 350,
                height: 600,
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
              <View style={styles.controlsContainer}>
                <Button
                  title={isPlaying ? 'Pause' : 'Play'}
                  onPress={() => {
                    if (isPlaying) {
                      player.pause();
                    } else {
                      player.play();
                    }
                  }}
                />
              </View>
            </View>
        )
    }; 
}