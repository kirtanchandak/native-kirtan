import { Linking, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    const opennWebsite = (websiteLink: string) => {
        Linking.openURL(websiteLink);
    }
  return (
    <View style={styles.container}>
          <Text style={styles.headingText}>ActionCard</Text>
          <View style={[styles.card, styles.cardElevated]}>
              <Image
                  source={{
                  uri: "https://cdn.hashnode.com/res/hashnode/image/upload/v1700377155557/eefe1ec1-b285-4c31-a60b-8404aa737024.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
              }}
                  style={styles.cardImage}
              />
              <View style={styles.cardBody}>
                  <Text style={styles.cardTitle}>How to Prevent Image Caching in React.js and Next.js</Text>
                  <Text style={styles.cardDesc}>Several times when we are building an application we need to add user images such as profile pictures.</Text>
                  <TouchableOpacity onPress={() => opennWebsite("https://kirtanchandak.hashnode.dev/how-to-prevent-image-caching-in-reactjs-and-nextjs")} >
                        <Text style={styles.cardTime}>Read More...</Text>
                  </TouchableOpacity>
              </View>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 12,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8,
    },
    card: {
        marginHorizontal: 16,
        marginTop: 8,
        paddingBottom: 10,
    },
    cardElevated: {
        backgroundColor: "white",
        borderRadius: 8,
        paddingBottom: 76,
    },
    cardImage: {
        height: 180,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    },
    cardBody: {
        flex: 1,
        width: 350,
        height: 100,
        marginHorizontal: 16,
        flexGrow: 1,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "black",
    },
    cardDesc: {
        color: "black",
    },
    cardTime: {
        color: "black",
        backgroundColor: "orange",
        width: 100,
        marginTop: 6,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: "center",
        paddingVertical: 4,
        paddingHorizontal: 3,
    },
})