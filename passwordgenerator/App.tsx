import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import * as Yup from "yup"

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, "Should be of four characters")
    .max(16, "Should be max of 16 characters")
    .required("Length is required")
})

export default function App() {
  const [password, setPassword] = useState("")
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = "";

    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
    const numbersChars = "0123456789"
    const specialChars = "!@#$%^&*"

    if (upperCase) {
      characterList += upperCaseChars
    }
    if (lowerCase) {
      characterList += lowerCaseChars
    }
    if (symbols) {
      characterList += specialChars
    }
    if (numbers) {
      characterList += numbersChars
    }

    const passwordResult = createPassword(characterList, passwordLength)

    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  }
  
  const createPassword = (characters: string, passwordLength: number) => { 
    let result = "";
    for (let i = 0; i < characters.length; i++) {
      let characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex);
    }
    return result;
  }

  const resetPassword = () => {
    setPassword("")
    setIsPasswordGenerated(false)
    setLowerCase(true)
    setUpperCase(false)
    setNumbers(false)
    setSymbols(false)
  }
  
  return (
    <View>
      <Text>Password Generator</Text>
      <View>
        <TextInput></TextInput>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})