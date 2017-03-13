import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles/chatList';

const ChatList = ({ chats }) => (
  <View style={styles.root}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Chats</Text>
    </View>
    <View style={styles.contentContainer}>
      <ScrollView horizontal>
        {chats.map((chat, i) => (
          <View key={i} style={styles.chatCard}>
            <View style={styles.chatCardTopContainer}>
              <Text style={styles.chatCardTitle}>
                {chat.title}
              </Text>
            </View>

            <View style={styles.chatCardBottomContainer}>
              <Text style={styles.chatCardMetaName}>
                {chat.group.name}
              </Text>
              <Text style={styles.chatCardMetaDate}>
                Mar 12 6:00pm
              </Text>
            </View>

          </View>
        ))}
      </ScrollView>
    </View>
  </View>
);

export default ChatList;
