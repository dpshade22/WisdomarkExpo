// CommentThread.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { sharedStyles } from '../styles';
import { useFonts, Raleway_400Regular } from '@expo-google-fonts/raleway';

const CommentThread = ({ thread, onShuffle }) => {
    const [comments, setComments] = useState(thread.comments);
    const [newComment, setNewComment] = useState('');

    const addComment = () => {
        setComments([...comments, newComment]);
        setNewComment('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.neumorphicCard}>
                <View>
                    <Text style={styles.threadQuote}>{thread.quote}</Text>
                    <Text>{thread.author}</Text>
                </View>
            </View>
            <FlatList
                data={comments}
                renderItem={({ item }) => <Text style={styles.comment}>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />
            <TextInput
                value={newComment}
                onChangeText={setNewComment}
                placeholder="Write a comment..."
                style={styles.input}
            />
            <Button title="Add Comment" onPress={addComment} />
            <Button title="Shuffle Thread" onPress={onShuffle} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    neumorphicCard: {
        backgroundColor: '#f0f0f0',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: -1, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        marginBottom: 80,
    },
    threadQuote: {
        fontFamily: 'Raleway_400Regular',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 8,
        fontStyle: 'italic',
    },
    comment: {
        fontSize: 16,
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 8,
    },
});

export default CommentThread;
