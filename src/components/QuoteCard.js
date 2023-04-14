import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuoteCard = ({ quote }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>{quote.text}</Text>
            <Text style={styles.author}>{quote.author}</Text>
        </View>
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
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 8,
    },
    author: {
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'right',
        color: '#777',
    },
});

export default QuoteCard;

