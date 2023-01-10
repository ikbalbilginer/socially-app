import { BASE_URL } from "@constants/config";
import { abram, jacob, malena, marilyn } from "@assets/dummyUser";

export const handleGetAllChats = () => {
  return new Promise((resolve, reject) => {
    const chats = [
      {
        id: "xxx",
        user: {
          username: "Malena Tudi",
          thumbnail: malena,
        },
        messages: [
          {
            user: "a",
            text: "Hey, how is it goin",
          },
          {
            user: "h",
            text: "Not bad what about you?",
          },
          {
            user: "a",
            text: "I was planning a travel",
          },
          {
            user: "a",
            text: "Do you wanna join? ",
          },
        ],
      },
      {
        id: "xxx2",
        user: {
          username: "Jacob Curtis",
          thumbnail: jacob,
        },
        messages: [
          {
            user: "a",
            text: "Yo, are you going to the Tim wedding?",
          },
          {
            user: "h",
            text: "Yes sure, and you?",
          },
          {
            user: "a",
            text: "He is my best friend",
          },
        ],
      },
      {
        id: "xxx3",
        user: {
          username: "Abram Levin",
          thumbnail: abram,
        },
        messages: [
          {
            user: "a",
            text: "Amir said we’d be staying over for a while... but ...",
          },
          {
            user: "h",
            text: "I was waiting for both of u",
          },
          {
            user: "h",
            text: "When will you coming",
          },
          {
            user: "a",
            text: "Amir said we’d be staying over for a while... but ...",
          },
        ],
      },
      {
        id: "xxx4",
        user: {
          username: "Marilyn Herwitz",
          thumbnail: marilyn,
        },
        messages: [
          {
            user: "a",
            text: "hey, i got new memes for you",
          },
          {
            user: "a",
            text: "Please send me last one again",
          },
        ],
      },
      {
        id: "xxx5",
        user: {
          username: "Desirae Saris",
          thumbnail: marilyn,
        },
        messages: [
          {
            user: "a",
            text: "we r goin to c the lions",
          },
          {
            user: "a",
            text: "they are doing a feed thing event at the zoo..",
          },
          {
            user: "h",
            text: "when?",
          },
          {
            user: "a",
            text: "Tonight, with Karen",
          },
          {
            user: "h",
            text: "see the lions or sea lions? also, is mac there with u??",
          },
        ],
      },
    ];

    resolve(chats);
  });
};
