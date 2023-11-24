import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
          <Text style={styles.headingText}>Puducherry</Text>
          <View style={[styles.card, styles.cardElevated]}>
              <Image
                  source={{
                  uri: "https://static.toiimg.com/photo/msid-81722189,width-96,height-65.cms"
              }}
                  style={styles.cardImage}
              />
              <View style={styles.cardBody}>
                  <Text style={styles.cardTitle}>Beach</Text>
                  <Text style={styles.cardDesc}>Pondicherry now known as Puducherry is the capital and most populous city of the Union Territory of Puducherry in India.</Text>
                  <Text style={styles.cardTime}>5 mins Away</Text>
              </View>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    card: {
        marginHorizontal: 16,
        marginTop: 8,
    },
    cardElevated: {
        backgroundColor: "white",
        borderRadius: 8,
        paddingBottom: 50,
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
        paddingTop: 12,
    },
    cardDesc: {
        color: "black",
    },
    cardTime: {
        color: "black",
        paddingTop: 6,
    }
})