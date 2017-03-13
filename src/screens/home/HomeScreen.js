import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ChatApi } from '../../../constants/api';
import { LoadingScreen } from '../../commons';
import { ChatList } from './components';
import styles from './styles/HomeScreen';

const chatApi = new ChatApi();

class HomeScreen extends Component {
  static defaultProps = {
    chatApi
  }

  state = {
    loading: false,
    chats: []
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const chats = await this.props.chatApi.fetchGroupChats();
    this.setState({ loading: false, chats });
  }

  render() {
    if (this.state.loading) {
      return <LoadingScreen />;
    }
    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Text>HomeScreen</Text>
        </View>
        <View style={styles.bottomContainer}>
          <ChatList chats={this.state.chats} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
