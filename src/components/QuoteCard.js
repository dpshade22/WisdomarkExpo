// QuoteCard.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { sharedStyles } from '../styles';
import * as Font from 'expo-font';
import { useFonts, Raleway_400Regular } from '@expo-google-fonts/raleway';

const QuoteCard = ({ quote, navigation }) => {
    const handlePress = () => {
        navigation.navigate('CommentThread', { quote });
    };

    return (
        <TouchableOpacity style={sharedStyles.neumorphicCard} onPress={handlePress}>
            <Text style={styles.text}>{quote.text}</Text>
            <Text style={styles.author}>{quote.author}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        margin: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    text: {
        fontFamily: 'Raleway_400Regular',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 8,
    },
    author: {
        fontFamily: 'Raleway_400Regular',
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'right',
        color: '#777',
    },
});

export default QuoteCard;

