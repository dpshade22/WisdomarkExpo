import React, { useState } from 'react';
import { View } from 'react-native';
import Navbar from './components/Navbar';
import QuoteFeed from './components/QuoteFeed';
// import DiscussionGroups from './components/DiscussionGroups';
// import OfflineActivities from './components/OfflineActivities';
// import TimeManagement from './components/TimeManagement';

export default function App() {
  const [activeTab, setActiveTab] = useState('quoteFeed');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={{ flex: 1 }}>
      <Navbar onTabClick={handleTabClick} />
      {activeTab === 'quoteFeed' && <QuoteFeed />}
      {/* {activeTab === 'discussionGroups' && <DiscussionGroups />} */}
      {/* {activeTab === 'offlineActivities' && <OfflineActivities />} */}
      {/* {activeTab === 'timeManagement' && <TimeManagement />} */}
    </View>
  );
}
