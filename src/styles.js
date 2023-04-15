// styles.js
import { StyleSheet } from 'react-native';

export const sharedStyles = StyleSheet.create({
    neumorphicCard: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: -1, height: -1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 16,
        width: '80%',
    },
});
