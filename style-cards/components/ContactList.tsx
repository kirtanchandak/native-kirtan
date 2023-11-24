import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: "Sarvesh",
            status: "Doctor🩺 hu bc!!",
            image: "https://pbs.twimg.com/profile_images/1356745305778237440/c8z2zzx4_400x400.jpg"
        },
        {
            uid: 2,
            name: "Kirtan",
            status: "Coder💻 hu bc!!",
            image: "https://pbs.twimg.com/profile_images/1613212664788025350/blCkVHxp_400x400.jpg"
        },
        {
            uid: 3,
            name: "Pandeyy",
            status: "Engineer🎓 hu mc!!",
            image: "https://pbs.twimg.com/profile_images/1384154567651192834/h6y388h7_400x400.jpg"
        }
    ]
  return (
    <View>
          <Text style={styles.headingText}>ContactList</Text>
          <ScrollView
            style={styles.container}
            scrollEnabled={false}>
              {
                  contacts.map((contact) => {
                      return (
                          <View key={contact.uid} style={styles.card}>
                              <View>
                                  <Image source={{
                                      uri: contact.image
                                  }} style={styles.contactImg}></Image>
                              </View>
                              <View style={styles.text}>
                                <Text style={styles.cardText}>{contact.name}</Text>
                                  <Text>{contact.status}</Text>
                                </View>
                          </View>
                      )
                  })
              }
          </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8,
    },
    container: {
        margin: 24,
    },
    contactImg: {
        height: 50,
        width: 50,
        borderRadius: 50
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 8,
        backgroundColor: "voilet",
    },
    text: {
        marginLeft: 12,
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})