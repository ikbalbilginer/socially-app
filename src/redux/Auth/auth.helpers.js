import { dummy1, dummy2, dummy4, dummy5 } from "@assets/dummyStories";
import {
  dummyAvatar1,
  dummyAvatar2,
  dummyF1,
  dummyF2,
  dummyF3,
  dummyF4,
  fakePost1,
  fakePost2,
  fakePost3,
  fakePost4,
  fakePost5,
} from "@assets/dummyFeed";

export const handleLogin = (data) => {
  return new Promise((resolve, reject) => {
    const dummyApiResponse = {
      username: "John Doe",
      slug: "@johndoe",
      posts: [
        fakePost1,
        fakePost2,
        fakePost3,
        fakePost4,
        dummyF4,
        fakePost1,
        fakePost2,
        fakePost5,
        fakePost3,
        fakePost4,
      ],
      avatar: "",
      followers: 1552,
      follows: 128,
      stories: [
        { thumbnail: dummy1 },
        { thumbnail: dummy2 },
        { thumbnail: dummy4 },
        { thumbnail: dummy1 },
        { thumbnail: dummy5 },
        { thumbnail: dummy2 },
        { thumbnail: dummy1 },
      ],
      feed: [
        {
          thumb: dummyF1,
          like: "2.2K",
          chat: "210",
          save: "5.4K",
          timestamp: "2 hrs ago",
          user: {
            username: "Harvey Keitel",
            avatar: dummyAvatar1,
          },
        },
        {
          thumb: dummyF2,
          like: "3.2K",
          chat: "554",
          save: "8.9K",
          timestamp: "3 hrs ago",
          user: {
            username: "Charlie Kelly",
            avatar: dummyAvatar2,
          },
        },
        {
          thumb: dummyF3,
          like: "6.2K",
          chat: "1.1K",
          save: "10K",
          timestamp: "4 hrs ago",
          user: {
            username: "Nick Mason",
            avatar: dummyAvatar1,
          },
        },
      ],
    };

    resolve(dummyApiResponse);
  });

  // return new Promise((resolve, reject) => {
  //   axios
  //     .post(`${BASE_URL}/api/auth/...`, data)
  //     .then((response) => {
  //       if (response.data) {
  //         resolve(response.data);
  //       } else {
  //         throw Error ...
  //       }
  //     })
  //     .catch((err) => {
  //       reject(err);
  //     });
  // });
};
