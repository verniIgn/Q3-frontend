import axios from 'axios';
import {MONGODB_URI} from 'react-native-dotenv';


axios.defaults.baseURL = MONGODB_URI + "/api";

const fakeGroupId = '58c6cb308080a27cc1d339b2';

class ChatApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/chats`;
  }

  async fetchGroupChats() {
    const { data } = await axios.get(this.path);
    return data.chats;
  }
}

export {
  ChatApi
};
