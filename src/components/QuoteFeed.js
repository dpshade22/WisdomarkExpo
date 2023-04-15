// QuoteFeed.js
import React from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';
import QuoteCard from './QuoteCard';

const QuoteFeed = ({ navigation }) => {
    const quotes = [
        { id: 1, text: 'The only true wisdom is in knowing you know nothing.', author: 'Socrates' },
        { id: 2, text: 'The unexamined life is not worth living.', author: 'Socrates' },
    ];

    navigation.setOptions({ header: () => null });
    return (
        <SafeAreaView style={styles.container}>
            {/* <Image
                source={require('../assets/Wisdomark.png')} // Update the path to your logo
                style={styles.logo}
                resizeMode="contain"
            /> */}
            {quotes.map(quote => (
                <QuoteCard key={quote.id} quote={quote} navigation={navigation} />
            ))}
        </SafeAreaView>
    );
};

export default QuoteFeed;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})