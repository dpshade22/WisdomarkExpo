import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Navbar = ({ onTabClick }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
            <TouchableOpacity onPress={() => onTabClick('discussionGroups')}>
                <Text>Discussion Groups</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onTabClick('offlineActivities')}>
                <Text>Offline Activities</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onTabClick('timeManagement')}>
                <Text>Time Management</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Navbar;
