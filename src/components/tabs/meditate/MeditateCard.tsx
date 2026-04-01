import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import React from 'react';
import { fontFamily } from '@/src/theme/fontFamily';


interface Props {
    image: React.ReactNode,
    title: string;
    height: number;
}

export default function MeditateCard({ image, title, height }: Props) {
    return (
        <TouchableOpacity style={[styles.card, { height }]}>
            <View>
                {image}
            </View>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        marginBottom: 15,
    },
    text: {
        position: 'absolute',
        bottom: 15,
        overflow: 'hidden',
        fontSize: 18,
        fontFamily: fontFamily.bold,
        color: 'white',
        marginLeft: 25,
    }
})