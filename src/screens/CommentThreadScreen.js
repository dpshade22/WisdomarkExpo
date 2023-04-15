// CommentThreadScreen.js
import React, { useLayoutEffect } from 'react';
import CommentThread from '../components/CommentThread';
import { SafeAreaView } from 'react-native-safe-area-context';

const CommentThreadScreen = ({ route, navigation }) => {
    const { quote } = route.params;

    // Define a sample thread object with an empty comments array
    const thread = {
        quote: quote.text,
        author: quote.author,
        comments: [],
    };

    const handleShuffle = () => {
        // Implement shuffling logic here
    };

    // Use the useLayoutEffect hook to set the navigation options
    useLayoutEffect(() => {
        // Hide the back button in the header
        navigation.setOptions({ header: () => null });
    }, [navigation]);

    return (
        <SafeAreaView>
            <CommentThread thread={thread} onShuffle={handleShuffle} />
        </SafeAreaView>
    );
};

export default CommentThreadScreen;
