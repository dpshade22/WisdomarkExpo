import React from 'react';
import { View, Text } from 'react-native';
import QuoteCard from './QuoteCard';

const QuoteFeed = () => {
    const quotes = [
        { id: 1, text: 'The only true wisdom is in knowing you know nothing.', author: 'Socrates' },
        { id: 2, text: 'The unexamined life is not worth living.', author: 'Socrates' },
    ];

    return (
        <View>
            {quotes.map(quote => (
                <QuoteCard key={quote.id} quote={quote} />
            ))}
        </View>
    );
};

export default QuoteFeed;
